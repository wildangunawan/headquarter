<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Ticket\StoreRequest;
use App\Http\Requests\Ticket\UpdateRequest;
use App\Http\Resources\TicketResource;
use App\Models\Ticket;
use App\Repositories\TicketRepository;
use App\Services\TicketService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use OpenApi\Annotations as OA;

class TicketController extends Controller
{
    protected TicketService $service;
    protected TicketRepository $repository;

    public function __construct(TicketService $service, TicketRepository $repository)
    {
        $this->service = $service;
        $this->repository = $repository;
    }

    /**
     * @OA\Get(
     *      path="/api/v1/tickets",
     *      tags={"Tickets - Support Center"},
     *      summary="API to get all tickets owned by the user and tickets assigned to the user/user's team",
     *      operationId="tickets",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="per_page",
     *          in="query",
     *          description="Number of items per page",
     *          required=false,
     *          @OA\Schema(
     *             type="string",
     *             default="10"
     *          ),
     *      ),
     *      @OA\Parameter(
     *          name="page",
     *          in="query",
     *          description="Page #",
     *          required=false,
     *          @OA\Schema(
     *             type="string",
     *             default="1"
     *          ),
     *      ),
     *      @OA\Parameter(
     *          name="type",
     *          in="query",
     *          description="Ticket status",
     *          required=false,
     *          @OA\Schema(
     *             type="string",
     *             default="1",
     *             description="0 - Pending, 1 - Resolved/closed"
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Return tickets data",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function index(Request $request)
    {
        return $this->respondSuccess(
            TicketResource::collection($this->repository->get($request->all()))
        );
    }

    /**
     * @OA\Post(
     *      path="/api/v1/tickets",
     *      tags={"Tickets - Support Center"},
     *      summary="API to create a new ticket",
     *      description="Don't forget to read the schema for the request body",
     *      operationId="tickets-store",
     *      security={{"sanctum":{}}},
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              encoding={
     *                  "subject",
     *                  "content",
     *                  "assigned_to",
     *              },
     *              @OA\Schema(
     *                  type="object",
     *                  @OA\Property(property="subject", type="string", default="Ticket subject"),
     *                  @OA\Property(property="content", type="string", default="Ticket content"),
     *                  @OA\Property(
     *                      property="assigned_to",
     *                      type="object",
     *                      @OA\Property(
     *                          property="team",
     *                          type="integer",
     *                          default="1",
     *                          description="1 - region, 2 - division, 3 - subdivision"
     *                      ),
     *                      @OA\Property(
     *                          property="type",
     *                          type="string",
     *                          default="SEA",
     *                          description="Code of the respective team"
     *                      )
     *                 ),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Ticket created and returning new data.",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation errors.",
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad request.",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function store(StoreRequest $request)
    {
        DB::beginTransaction();

        try {
            $ticket = $this->service->store($request->validated());

            DB::commit();
            return $this->respondSuccess(new TicketResource($ticket));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }

    /**
     * @OA\Get(
     *      path="/api/v1/tickets/{ticket}",
     *      tags={"Tickets - Support Center"},
     *      summary="API to get ticket data by ID",
     *      operationId="tickets-show",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="ticket",
     *          in="path",
     *          description="Ticket ID",
     *          required=true,
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Return ticket data",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function show(Ticket $ticket)
    {
        $this->authorize('view', $ticket);

        return $this->respondSuccess(new TicketResource(
            $ticket->load('author', 'comments', 'assignedToStaff', 'assignedToTeam'))
        );
    }


    /**
     * @OA\Put(
     *      path="/api/v1/tickets/{ticket}",
     *      tags={"Tickets - Support Center"},
     *      summary="API to update a ticket",
     *      description="Don't forget to read the schema for the request body",
     *      operationId="tickets-update",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="ticket",
     *          in="path",
     *          description="Ticket ID",
     *          required=true,
     *      ),
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              encoding={
     *                  "status",
     *                  "assigned_to",
     *                  "transfer_to",
     *              },
     *              @OA\Schema(
     *                  type="object",
     *                  @OA\Property(property="status", type="integer", default="1", description="0 - pending (reopen), 1 - resolved"),
     *                  @OA\Property(property="assigned_to", type="integer", default="1300014", description="Staff CID"),
     *                  @OA\Property(
     *                      property="transfer_to",
     *                      type="object",
     *                      @OA\Property(
     *                          property="team",
     *                          type="integer",
     *                          default="1",
     *                          description="1 - region, 2 - division, 3 - subdivision"
     *                      ),
     *                      @OA\Property(
     *                          property="type",
     *                          type="string",
     *                          default="SEA",
     *                          description="Code of the respective team"
     *                      )
     *                 ),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Ticket created and returning new data.",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation errors.",
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad request.",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function update(UpdateRequest $request, Ticket $ticket)
    {
        $this->authorize('update', $ticket);
        DB::beginTransaction();

        try {
            $ticket = $this->service->update($ticket, $request->validated());

            DB::commit();
            return $this->respondSuccess(new TicketResource(
                $ticket->load('author', 'comments', 'assignedToStaff', 'assignedToTeam')
            ));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }
}
