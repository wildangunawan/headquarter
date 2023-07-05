<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketCommentRequest;
use App\Http\Resources\TicketCommentResource;
use App\Http\Resources\TicketResource;
use App\Models\Ticket;
use App\Models\TicketComment;
use App\Services\TicketCommentService;
use Illuminate\Support\Facades\DB;
use OpenApi\Annotations as OA;

class TicketCommentController extends Controller
{
    protected TicketCommentService $service;

    public function __construct(TicketCommentService $service)
    {
        $this->service = $service;
    }

    /**
     * @OA\Post(
     *      path="/api/v1/tickets/{ticket}/comment",
     *      tags={"Tickets - Support Center"},
     *      summary="API to post a new comment to a ticket",
     *      operationId="tickets-comment-store",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="ticket",
     *          in="path",
     *          description="Ticket ID",
     *          required=true,
     *      ),
     *      @OA\RequestBody(
     *          @OA\JsonContent(),
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  type="object",
     *                  required={
     *                      "content",
     *                  },
     *                  @OA\Property(property="content", type="text"),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Comment stored. Re-request ticket data to get the newest data",
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
    public function __invoke(TicketCommentRequest $request, Ticket $ticket)
    {
        $this->authorize('create', [TicketComment::class, $ticket]);
        DB::beginTransaction();

        try {
            $this->service->store($ticket, $request->validated());

            DB::commit();
            return $this->respondSuccessWithMessage('Comment stored successfully');
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }
}
