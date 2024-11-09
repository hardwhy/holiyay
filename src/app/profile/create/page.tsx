import SubmitButton from "@/components/form/button";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import {
  checkUserHasProfile,
  createProfileAction,
} from "@/utils/actions/profile-actions";
import { redirect } from "next/navigation";
import React from "react";

async function CreateProfilePage() {
  const profile = await checkUserHasProfile();

  if (profile) redirect("/");

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create New User Profile
      </h1>
      <div className="border p-8 rounded-md max-w">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput type="text" name="firstName" label="First Name" />
            <FormInput type="text" name="lastName" label="Last Name" />
            <FormInput type="text" name="username" label="Username" />
          </div>
          <SubmitButton text="Create Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProfilePage;
