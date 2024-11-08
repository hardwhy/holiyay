import SubmitButton from "@/components/form/button";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import { ImageInputContainer } from "@/components/form/image-input-container";
import {
  getUserProfile,
  updateImageProfile,
  updateUserProfile,
} from "@/utils/actions/profile-actions";
import { ActionResult } from "@/utils/types/action-result";
import React from "react";

async function ProfilePage() {
  const profile = await getUserProfile();
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize"> User Profile</h1>
      <div className="border p-8 rounded-md max-w">
        <ImageInputContainer
          image={profile?.profileImage}
          name={profile?.username}
          text={"Update Profile Image"}
          action={updateImageProfile}
        />
        <FormContainer action={updateUserProfile}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              defaultValue={profile?.firstName}
              type="text"
              name="firstName"
              label="First Name"
            />
            <FormInput
              defaultValue={profile?.lastName}
              type="text"
              name="lastName"
              label="Last Name"
            />
            <FormInput
              defaultValue={profile?.username}
              type="text"
              name="username"
              label="Username"
            />
          </div>
          <SubmitButton text="Update Profile" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default ProfilePage;
