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

export default function UserReports() {
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <AdminLayout title="Dashboard">
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

        <Calendar />
      </VStack>
    </AdminLayout>
  );
}
