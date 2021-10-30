import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopMenu from '../components/TopMenu';
import Content from '../components/Content';

export default function Dashboard() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
          <TopMenu />

          <Content />
        </div>
      </div>

      {/* <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

      <script src="js/sb-admin-2.min.js"></script>

      <script src="vendor/chart.js/Chart.min.js"></script>

      <script src="js/demo/chart-area-demo.js"></script>
      <script src="js/demo/chart-pie-demo.js"></script> */}
    </div>
  );
}
