import AmenityInput from "@/components/form/amenity-input";
import SubmitButton from "@/components/form/button";
import CategoryInput from "@/components/form/category-input";
import CounterInput from "@/components/form/counter-input";
import CountryInput from "@/components/form/country-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import { ImageInput } from "@/components/form/image-input";
import PriceInput from "@/components/form/price-input";
import TextAreaInput from "@/components/form/text-area-input";
import { createPropertyAction } from "@/utils/actions/property-actions";
import React from "react";

const LabelWithSpannedInfo = ({
  label,
  info,
}: {
  label: string;
  info: string;
}) => {
  return (
    <span>
      {label}{" "}
      <span className="text-muted-foreground text-md font-normal">
        ({info})
      </span>
    </span>
  );
};

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        {" "}
        create property
      </h1>
      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              // label="Name (20 limit)"
              label={<LabelWithSpannedInfo label="Name" info="20 characters" />}
              defaultValue="Resort in Bali"
            />
            <FormInput
              name="tagline"
              type="text"
              label={
                <LabelWithSpannedInfo label="Tagline" info="30 characters" />
              }
              defaultValue="Where the paradise came true"
            />
            <PriceInput />
            <CategoryInput />
          </div>
          <TextAreaInput
            name="description"
            label={
              <LabelWithSpannedInfo label="Description" info="10 - 30 words" />
            }
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountryInput />
            <ImageInput />
          </div>
          <h3 className="text-lg mt-8 mb-4 font-medium">Accommodation</h3>
          <CounterInput detail="guests" />
          <CounterInput detail="bedrooms" />
          <CounterInput detail="beds" />
          <CounterInput detail="bathrooms" />

          <h3 className="text-lg mt-10 mb-6 font-medium">Amenities</h3>
          <AmenityInput />
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
