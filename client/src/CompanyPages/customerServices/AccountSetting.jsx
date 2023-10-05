import React from 'react';

function AccountSettings() {


  return (
    
    <div className="bg-gray-100 min-h-screen py-12">
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
          <div className="flex items-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Right Side - Personal Information */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="mb-4">
            <label className="font-semibold">Name:</label>
            <p className="ml-2 text-black">Manash Anand</p>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-black">Email:</label>
            <p className="ml-2 text-black">simsunelectricwork@gmail.com</p>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-black">Phone:</label>
            <p className="ml-2 text-black">
+007 9089 6767</p>
          </div>
        </div>

        {/* Left Side - Notification Settings */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          {/* Add notification settings controls */}
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="emailNotifications" className="mr-2" />
              <label htmlFor="emailNotifications">Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="pushNotifications" className="mr-2" />
              <label htmlFor="pushNotifications">Push Notifications</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="smsNotifications" className="mr-2" />
              <label htmlFor="smsNotifications">SMS Notifications</label>
            </div>
          </div>
        </div>

        {/* Right Side - Privacy Settings */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
          {/* Add privacy settings controls */}
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="publicProfile" className="mr-2" />
              <label htmlFor="publicProfile">Public Profile</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="hideEmail" className="mr-2" />
              <label htmlFor="hideEmail">Hide Email</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="hidePhone" className="mr-2" />
              <label htmlFor="hidePhone">Hide Phone</label>
            </div>
          </div>
        </div>

        {/* Left Side - Billing Information */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <div className="mb-4">
            <label className="font-semibold text-black">Credit Card:</label>
            <p className="ml-2 text-black">**** **** **** 1234</p>
          </div>
          <div className="mb-4">
            <label className="font-semibold text-black">Billing Address:</label>
            <p className="ml-2 text-black">Flat No. T-1, 104, 1st Floor, Tower-1
No. GH 01/A, Sector 16C,
Exotica Dreamville, Greater Noida,
U.P. 201203
</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AccountSettings;
