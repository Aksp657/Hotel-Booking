import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ActiveHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newHotel, setNewHotel] = useState({
    name: '',
    location: '',
    vendor: '',
    phone: '',
    email: '',
    joinedAt: '',
    isFeatured: false
  });

  const handleAddHotel = () => {
    setHotels([...hotels, { ...newHotel, id: Date.now() }]);
    setShowAddModal(false);
    setNewHotel({
      name: '',
      location: '',
      vendor: '',
      phone: '',
      email: '',
      joinedAt: '',
      isFeatured: false
    });
  };

  const handleDeleteHotel = (id) => {
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Active Hotels</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search hotels..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
          >
            <FaPlus /> Add Hotel
          </button>
        </div>
      </div>

      {/* Hotels Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {hotels.map((hotel) => (
              <tr key={hotel.id}>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.vendor}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.joinedAt}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    hotel.isFeatured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {hotel.isFeatured ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDeleteHotel(hotel.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Hotel Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Hotel</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Hotel Name"
                className="w-full px-3 py-2 border rounded"
                value={newHotel.name}
                onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full px-3 py-2 border rounded"
                value={newHotel.location}
                onChange={(e) => setNewHotel({ ...newHotel, location: e.target.value })}
              />
              <input
                type="text"
                placeholder="Vendor"
                className="w-full px-3 py-2 border rounded"
                value={newHotel.vendor}
                onChange={(e) => setNewHotel({ ...newHotel, vendor: e.target.value })}
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-3 py-2 border rounded"
                value={newHotel.phone}
                onChange={(e) => setNewHotel({ ...newHotel, phone: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded"
                value={newHotel.email}
                onChange={(e) => setNewHotel({ ...newHotel, email: e.target.value })}
              />
              <input
                type="date"
                className="w-full px-3 py-2 border rounded"
                value={newHotel.joinedAt}
                onChange={(e) => setNewHotel({ ...newHotel, joinedAt: e.target.value })}
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFeatured"
                  className="mr-2"
                  checked={newHotel.isFeatured}
                  onChange={(e) => setNewHotel({ ...newHotel, isFeatured: e.target.checked })}
                />
                <label htmlFor="isFeatured">Featured Hotel</label>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAddHotel}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Hotel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveHotels; 