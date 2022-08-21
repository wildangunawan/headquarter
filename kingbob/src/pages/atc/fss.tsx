import FSSRoster from "@components/atc/FSSRoster";
import AdminLayout from "@layouts/admin";
import { ReactElement } from "react";

const FSSList = () => <FSSRoster />
FSSList.getLayout = (page: ReactElement) => <AdminLayout title="FSS Roster">{page}</AdminLayout>
export default FSSList;