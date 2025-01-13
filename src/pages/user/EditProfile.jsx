import ImagePicker from "@/components/ImagePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { updateProfile } from "@/services/userServices";
import routes from "@/config/routes";
import { useNavigate } from "react-router-dom";

export default function EditProfile({ user }) {
  const [newUser, setNewUser] = useState({
    ...user,
    avatar: [user.avatar],
  });

  const navigate = useNavigate();

  const handleSelectedAvatar = (images) => {
    setNewUser({ ...newUser, image: images[0], avatar: [] });
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("fullname", newUser.fullname);
    formData.append("phone", newUser.phone);
    formData.append("address", newUser.address);
    if (newUser?.avatar.length === 0) {
      formData.append("avatar", newUser.image);
    }
    console.log({
      fullname: newUser?.fullname,
      phone: newUser?.phone,
      address: newUser?.address,
      avatar: newUser?.image,
    });

    const response = await updateProfile(formData);
    if (response.status === 200) {
      navigate(`${routes.profile}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-lg font-semibold mb-8">Edit Profile</h1>

      <div className="space-y-8 flex flex-col items-center">
        <div className="grid md:grid-cols-2 space-x-6">
          <ImagePicker
            title={"Image"}
            imageName={"Avatar"}
            image_urls={newUser?.avatar}
            onChange={handleSelectedAvatar}
          />

          <div className="flex-1 grid md:grid-cols-1 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-2">
                  Username
                </label>
                <Input value={newUser?.username} disabled />
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">
                  Fullname
                </label>
                <Input
                  value={newUser?.fullname}
                  onChange={(e) =>
                    setNewUser({ ...newUser, fullname: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">
                  Phone
                </label>
                <Input
                  value={newUser?.phone || ""}
                  placeholder="Phone number"
                  onChange={(e) =>
                    setNewUser({ ...newUser, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">
                  Address
                </label>
                <Input
                  value={newUser?.address || ""}
                  placeholder="Address"
                  onChange={(e) =>
                    setNewUser({ ...newUser, address: e.target.value })
                  }
                />
              </div>
            </div>
            <Button
              className="bg-[#FF7043] hover:bg-[#FF7043]/90 text-white py-3 rounded-md"
              onClick={handleUpdateProfile}
            >
              Save change
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
