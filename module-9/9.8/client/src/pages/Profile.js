// User profile page

import { LogoutButton } from './Login';
import { useAuth } from '../context/AuthProvider';

function ProfileRow({ label, value }) {
  return (
    <div className="flex flex-row justify-between items-center my-2">
      <label className="w-1/3">{label}</label>
      <input
        className="bg-white rounded-md flex-grow p-2 text-right"
        type="text"
        disabled
        value={value}
      />
    </div>
  );
}

function Profile() {
  const { logout } = useAuth();
  return (
    <div
      id="profile-container"
      className="flex flex-col h-max justify-start items-center w-1/3 min-w-80 mx-auto"
    >
      <div className="my-12">
        <h1 className="text-2xl mb-8 font-semibold">Your Profile</h1>
        <p className="py-4 italic text-gray-600">
          This is a private route. You should only be able to view it if logged
          in.
        </p>
      </div>
      <div className="drop-shadow-xl border h-80 w-full bg-gray-200 py-10 px-10 border-gray-400 rounded-xl text-lg flex flex-col justify-around">
        <ProfileRow label="Name" value={'Example name'} />
        <ProfileRow label="Email" value={'Example Email'} />
        <ProfileRow label="Role" value={'Example Role'} />
        <span className="my-8 text-center">
          <LogoutButton onClick={logout} />
        </span>
      </div>
    </div>
  );
}

export default Profile;
