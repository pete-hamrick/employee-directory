import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { useProfile } from '../../context/ProfileContext';

export default function Profile({ isEditing = false }) {
  const { profile, setProfile } = useProfile();
  return (
    <div>
      {profile?.email ? <ProfileView profile={profile} /> : <ProfileForm />}
      {/* if there is a user, render a ProfileView component */}
    </div>
  );
}
