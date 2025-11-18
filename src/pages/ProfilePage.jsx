import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import { Mail, X, Save, Edit2 } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ProfilePage() {
  const { user, updateUserProfile } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      await updateUserProfile(displayName, photoURL);
      toast.success('Profile updated successfully!');
      setIsModalOpen(false);
    } catch (err) {
      toast.error(`Failed to update: ${err.message}`);
    } finally {
      setFormLoading(false);
    }
  };
  if (!user) {
    return <LoadingSpinner />;
  }
  const avatar = user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || user.email}&background=random&color=fff`;
  return (
    <>
      <div className="max-w-2xl mx-auto mt-10 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
          <img src={avatar} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-500 object-cover" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{user.displayName || 'No Name Set'}</h2>
          <p className="text-gray-600 text-lg flex items-center justify-center gap-2"><Mail size={18} /> {user.email}</p>
          <button onClick={() => setIsModalOpen(true)} className="mt-6 flex items-center gap-2 mx-auto bg-teal-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-teal-700 transition hover:cursor-pointer"><Edit2 size={18} /> Update Profile</button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 hover:cursor-pointer"><X size={24} /></button>
            <h3 className="text-2xl font-bold mb-6 text-center">Update Your Profile</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Display Name</label>
                <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="w-full px-4 py-3 border rounded-lg" placeholder="Your Name"/>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Photo URL</label>
                <input type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className="w-full px-4 py-3 border rounded-lg" placeholder="https://your-image.com/avatar.png" />
              </div>
              <button type="submit" disabled={formLoading} className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 hover:cursor-pointer disabled:bg-gray-400">
                <Save size={18} />
                {formLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}