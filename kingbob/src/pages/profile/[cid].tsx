// Chakra imports
import { Grid } from "@chakra-ui/react";
import AdminLayout from "layouts/admin";
import { ReactElement } from "react";

// Custom components
import ExtraInformation from "@components/profile/ExtraInformation";
import UserDetail from "@components/profile/UserDetail";
import ControllingApproval from "@components/profile/ControllingApproval";
import EventBookings from "@components/profile/EventBookings";

export default function Overview() {
  return (
    <>
      {/* Main Fields */}
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.5fr 0.5fr",
        }}
        templateRows={{
          base: "repeat(2, 1fr)",
          lg: "1fr",
        }}
        gap="20px"
        mb="20px"
      >
        <UserDetail
          name="Adela Parkson"
          rating="Student 3 (S3) / Airline Transport Pilot License (ATPL)"
          atc_hrs={351.21}
          pilot_hrs={378.07}
        />
        <ExtraInformation />
      </Grid>

      <Grid
        templateColumns={{
          base: "1fr",
          lg: "1.2fr 0.8fr",
        }}
        templateRows={{
          base: "repeat(2, 1fr)",
          lg: "1fr",
        }}
        gap="20px"
      >
        <ControllingApproval />
        <EventBookings />
      </Grid>
    </>
  );
}


Overview.getLayout = (page: ReactElement) => <AdminLayout title="Profile">{page}</AdminLayout>