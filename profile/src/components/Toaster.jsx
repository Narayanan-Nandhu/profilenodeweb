import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toaster(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Toaster;