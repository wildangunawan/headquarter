import FSSRoster from "@components/atc/FSSRoster";
import AdminLayout from "@layouts/admin";

const FSSList = () => {
    return (
        <AdminLayout title="FSS Roster">
            <FSSRoster />
        </AdminLayout>
    );
};

export default FSSList;