import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import {userRouter} from "next/router"
import PropertyDetails from "@/components/property/PropertyDetails";

export default function PropertyPage() {
    const router = userRouter();
    const { id } = router.query;
    const property = PROPERTYLISTINGSAMPLE.find((item) =>
    item.name=== id);

    if (!property) return <p> Property not found</p>;

    return (
        <div>
            <PropertyDetails property={property} /> 
        </div>
        );
}