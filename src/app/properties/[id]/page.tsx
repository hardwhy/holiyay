import FavoriteToggleButton from "@/components/card/favorite-toggle-button";
import PropertyRating from "@/components/card/property-rating";
import {
  BookingCalendar,
  Breadcrumbs,
  ImageContainer,
  PropertyFeatures,
  ShareButton,
  UserInfo,
} from "@/components/properties";
import { getPropertyById } from "@/utils/actions/property-actions";
import { redirect } from "next/navigation";

type Props = {
  params: any;
};

async function PropertyDetailPage({ params }: Props) {
  const id = (await params).id;
  const property = await getPropertyById({ id });
  if (!property) redirect("/");
  const { name, tagline, image, profile } = property;

  return (
    <section>
      <Breadcrumbs name={name} />
      <header className="flex justify-between items-center mt-4">
        <h1 className="text-4xl font-bold capitalize">{tagline}</h1>

        <div className="flex items-center gap-x-4">
          <ShareButton data={property} />
          <FavoriteToggleButton propertyId={id} />
        </div>
      </header>
      <ImageContainer mainImage={image} name={name} />
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <div className="flex gap-x-4 items-center">
            <h1 className="text-xl font-bold">{name}</h1>
            <PropertyRating inPage propertyId={id} />
          </div>
          <PropertyFeatures property={property} />
          <UserInfo profile={profile} />
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          <BookingCalendar />
        </div>
      </section>
    </section>
  );
}

export default PropertyDetailPage;
