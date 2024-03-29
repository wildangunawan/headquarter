// Chakra imports
import {
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import AdminLayout from "layouts/admin";
import FeaturedEvents from "@components/dashboard/FeaturedEvents";
import RecentNews from "@components/dashboard/RecentNews";
import Calendar from "@components/dashboard/Calendar";
import FutureEvents from "@components/dashboard/FutureEvents";
import { ReactElement } from "react";

const Dashboard = () => {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <VStack spacing={"20px"} align="stretch">
      {/* Header */}
      <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
        Welcome, King Bob
      </Text>

      {/* Featured events and news */}
      <SimpleGrid columns={[1, 2]} spacing={4}>
        <FeaturedEvents />
        <RecentNews />
      </SimpleGrid>

      {/* Show calendar if screen medium or above */}
      <Calendar display={{ base: "none", md: "block" }} />
      {/* Otherwise show 5 (or less) future events */}
      <FutureEvents display={{ base: "block", md: "none" }} />
    </VStack>
  );
}

Dashboard.getLayout = (page: ReactElement) => <AdminLayout title="Dashboard">{page}</AdminLayout>
export default Dashboard;