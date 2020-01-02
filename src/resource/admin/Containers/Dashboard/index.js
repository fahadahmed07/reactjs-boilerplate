import { connect } from 'react-redux';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "../../../../plugins/fontawesome-free/css/all.min.css"
// import "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
import "../../../../plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
import "../../../../plugins/icheck-bootstrap/icheck-bootstrap.min.css"
import "../../../../plugins/jqvmap/jqvmap.min.css"
import "../../../../dist/css/adminlte.min.css"
import "../../../../plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import "../../../../plugins/daterangepicker/daterangepicker.css"
import "../../../../plugins/summernote/summernote-bs4.css"
// import "../../src/plugins/jquery/jquery.min.js"
import $ from 'jquery';
import CryptoJS from 'crypto-js';
import SecretKey from '../../../../config/SecretKeys';


// const key = NodeRSA({ b: 2048 });
// import "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            showSideBar: true
        }
    }

    // componentDidMount() {
    //     const userData = localStorage.getItem('ADMIN_DATA');
    //     // console.log("ENCRYPTED DATA FROM LOCAL STORAGE ==> ", userData);

    //     if (userData) {
    //         const decryptedUserData = this.decrypt(userData)
    //         // console.log("DECRYPTED USER DATA ==> ", decryptedUserData);
            
    //         if(!decryptedUserData.access_token){
    //             console.log("decryptedUserData.access_token ==>> ", decryptedUserData.access_token);
    //             this.props.history.push('/admin/login')
    //         }
            
    //     } else {
    //         this.props.history.push('/admin/login')
    //     }
    // }

    // decrypt = (value) => {
    //     let bytes = CryptoJS.AES.decrypt(value, SecretKey);
    //     let decryptedUserData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //     return decryptedUserData;
    // };

    handleSideBar = () => {
        const { showSideBar } = this.state;
        if (showSideBar) {
            this.setState({ showSideBar: false })
        } else {
            this.setState({ showSideBar: true })
        }
    }

    handleNavigation = (e) => {
        if (e === "/admin/login") {
            localStorage.removeItem('ADMIN_DATA');
            this.props.history.push(e);
        } else {
            this.props.history.push(e);
        }
        // console.log(this.props)
    }

    render() {
        $(document).ready(function () {
            // $('.nav-item').on('click', function () {
            //     console.log('sssss');
            //     $(this).parent().find(".has-treeview").toggleClass("menu-open");
            // })

            $(".nav-item").on("click", function () {
                // console.log('ss');
                $(this).closest('.has-treeview').toggleClass("menu-open");
                // if ($(".has-treeview").length != 1) {
                // }
            });

            // $(".nav-item").on("click", function () {
            //     console.log('ss');
            //     if ($(".menu-open").length != 1) {
            //         console.log('Y');
            //         $(this).closest('.menu-open').remove();
            //         Event.preventDefault();
            //     } else {
            //         console.log('N');
            //         Event.preventDefault();
            //     }
            // });
        })


        const { showSideBar } = this.state;
        return (
            <div className={showSideBar ? "hold-transition sidebar-mini layout-fixed" : "sidebar-mini layout-fixed sidebar-collapse"} >
                <div className="wrapper">

                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                        {/* <!-- Left navbar links --> */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" onClick={this.handleSideBar} className="nav-link" data-widget="pushmenu"><i className="fas fa-bars"></i></a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="#" href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <a href="#" onClick={() => this.handleNavigation('/admin/test')} className="nav-link">Test Page</a>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <span href="#" onClick={() => this.handleNavigation('/admin/login')} className="nav-link">Log Out</span>
                            </li>
                        </ul>

                        {/* <!-- SEARCH FORM --> */}
                        <form className="form-inline ml-3">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* <!-- Right navbar links --> */}
                        <ul className="navbar-nav ml-auto">
                            {/* <!-- Messages Dropdown Menu --> */}
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">
                                    <i className="far fa-comments"></i>
                                    <span className="badge badge-danger navbar-badge">3</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                    <a href="#" className="dropdown-item">
                                        {/* <!-- Message Start --> */}
                                        <div className="media">
                                            <img src="../../../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">Brad Diesel<span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                                                </h3>
                                                <p className="text-sm">Call me whenever you can...</p>
                                                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                            </div>
                                        </div>
                                        {/* <!-- Message End --> */}
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        {/* <!-- Message Start --> */}
                                        <div className="media">
                                            <img src="../../../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">John Pierce<span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                                                </h3>
                                                <p className="text-sm">I got your message bro</p>
                                                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                            </div>
                                        </div>
                                        {/* <!-- Message End --> */}
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        {/* <!-- Message Start --> */}
                                        <div className="media">
                                            <img src="../../../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                            <div className="media-body">
                                                <h3 className="dropdown-item-title">Nora Silvester<span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                                                </h3>
                                                <p className="text-sm">The subject goes here</p>
                                                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                            </div>
                                        </div>
                                        {/* <!-- Message End --> */}
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                                </div>
                            </li>
                            {/* <!-- Notifications Dropdown Menu --> */}
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">
                                    <i className="far fa-bell"></i>
                                    <span className="badge badge-warning navbar-badge">15</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-envelope mr-2"></i> 4 new messages<span className="float-right text-muted text-sm">3 mins</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-users mr-2"></i> 8 friend requests<span className="float-right text-muted text-sm">12 hours</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        <i className="fas fa-file mr-2"></i> 3 new reports<span className="float-right text-muted text-sm">2 days</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-widget="control-sidebar" data-slide="true">
                                    <i className="fas fa-th-large"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <aside className="main-sidebar sidebar-dark-primary elevation-4">
                        {/* <!-- Brand Logo --> */}
                        <a href="#" className="brand-link">
                            <img src={require("../../../../dist/img/AdminLTELogo.png")} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                                style={{ opacity: 0.8 }} />
                            <span className="brand-text font-weight-light">AdminLTE 3</span>
                        </a>

                        <div className="sidebar vh-100">
                            {/* <!-- Sidebar user panel (optional) --> */}
                            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                                <div className="image">
                                    <img src={require("../../../../dist/img/user2-160x160.jpg")} className="img-circle elevation-2" alt="User Image" />
                                </div>
                                <div className="info">
                                    <a href="#" className="d-block">Alexander Pierce</a>
                                </div>
                            </div>

                            <nav className="mt-2 bg-transparent">
                                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-chart-pie"></i>
                                            <p>Charts<i className="right fas fa-angle-left dropArrow"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>ChartJS</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Flot</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Inline</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-edit"></i>
                                            <p>Forms<i className="fas fa-angle-left right"></i>
                                            </p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>General Elements</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Advanced Elements</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Editors</p>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Validation</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-header">MULTI LEVEL EXAMPLE</li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-circle nav-icon"></i>
                                            <p>Level 1</p>
                                        </a>
                                    </li>

                                    <li className="nav-item has-treeview">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon fas fa-circle"></i>
                                            <p>Level 1<i className="right fas fa-angle-left dropArrow"></i></p>
                                        </a>
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Level 2</p>
                                                </a>
                                            </li>
                                            <li className="nav-item has-treeview">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Level 2<i className="right fas fa-angle-left dropArrow"></i></p>
                                                </a>
                                                <ul className="nav nav-treeview">
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="far fa-dot-circle nav-icon"></i>
                                                            <p>Level 3</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="far fa-dot-circle nav-icon"></i>
                                                            <p>Level 3</p>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#" className="nav-link">
                                                            <i className="far fa-dot-circle nav-icon"></i>
                                                            <p>Level 3</p>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Level 2</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fas fa-circle nav-icon"></i>
                                            <p>Level 1</p>
                                        </a>
                                    </li>

                                    <li className="nav-header">LABELS</li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon far fa-circle text-danger"></i>
                                            <p className="text">Important</p>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon far fa-circle text-warning"></i>
                                            <p>Warning</p>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="nav-icon far fa-circle text-info"></i>
                                            <p>Informational</p>
                                        </a>
                                    </li>




                                </ul>
                            </nav>


                        </div>


                    </aside>


                    <div className="content-wrapper vh-100">

                        {/* <!-- Content Header (Page header) --> */}
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0 text-dark">Dashboard</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">Dashboard v1</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="content">

                            <div className="container-fluid">
                                <div className="row">

                                    <section className="col-lg-7 connectedSortable">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title"><i className="ion ion-clipboard mr-1"></i>To Do List</h3>
                                                <div className="card-tools">
                                                    <ul className="pagination pagination-sm">
                                                        <li className="page-item"><a href="#" className="page-link">&laquo;</a></li>
                                                        <li className="page-item"><a href="#" className="page-link">1</a></li>
                                                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                                                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                                                        <li className="page-item"><a href="#" className="page-link">&raquo;</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <!-- /.card-header --> */}
                                            <div className="card-body">
                                                <ul className="todo-list" data-widget="todo-list">
                                                    <li>
                                                        {/* <!-- drag handle --> */}
                                                        <span className="handle">
                                                            <i className="fas fa-ellipsis-v"></i>
                                                            <i className="fas fa-ellipsis-v"></i>
                                                        </span>
                                                        {/* <!-- checkbox --> */}
                                                        <div className="icheck-primary d-inline ml-2">
                                                            <input type="checkbox" value="" name="todo1" id="todoCheck1" />
                                                            <label htmlFor="todoCheck1"></label>
                                                        </div>
                                                        {/* <!-- todo text --> */}
                                                        <span className="text">Design a nice theme</span>
                                                        {/* <!-- Emphasis label --> */}
                                                        <small className="badge badge-danger"><i className="far fa-clock"></i> 2 mins</small>
                                                        {/* <!-- General tools such as edit or delete--> */}
                                                        <div className="tools">
                                                            <i className="fas fa-edit"></i>
                                                            <i className="fas fa-trash-o"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="handle">
                                                            <i className="fas fa-ellipsis-v"></i>
                                                            <i className="fas fa-ellipsis-v"></i>
                                                        </span>
                                                        <div className="icheck-primary d-inline ml-2">
                                                            <input type="checkbox" value="" name="todo2" id="todoCheck2" />
                                                            <label htmlFor="todoCheck2"></label>
                                                        </div>
                                                        <span className="text">Make the theme responsive</span>
                                                        <small className="badge badge-info"><i className="far fa-clock"></i> 4 hours</small>
                                                        <div className="tools">
                                                            <i className="fas fa-edit"></i>
                                                            <i className="fas fa-trash-o"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="handle">
                                                            <i className="fas fa-ellipsis-v"></i>
                                                            <i className="fas fa-ellipsis-v"></i>
                                                        </span>
                                                        <div className="icheck-primary d-inline ml-2">
                                                            <input type="checkbox" value="" name="todo3" id="todoCheck3" />
                                                            <label htmlFor="todoCheck3"></label>
                                                        </div>
                                                        <span className="text">Let theme shine like a star</span>
                                                        <small className="badge badge-warning"><i className="far fa-clock"></i> 1 day</small>
                                                        <div className="tools">
                                                            <i className="fas fa-edit"></i>
                                                            <i className="fas fa-trash-o"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="handle">
                                                            <i className="fas fa-ellipsis-v"></i>
                                                            <i className="fas fa-ellipsis-v"></i>
                                                        </span>
                                                        <div className="icheck-primary d-inline ml-2">
                                                            <input type="checkbox" value="" name="todo4" id="todoCheck4" />
                                                            <label htmlFor="todoCheck4"></label>
                                                        </div>
                                                        <span className="text">Let theme shine like a star</span>
                                                        <small className="badge badge-success"><i className="far fa-clock"></i> 3 days</small>
                                                        <div className="tools">
                                                            <i className="fas fa-edit"></i>
                                                            <i className="fas fa-trash-o"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="handle">
                                                            <i className="fas fa-ellipsis-v"></i>
                                                            <i className="fas fa-ellipsis-v"></i>
                                                        </span>
                                                        <div className="icheck-primary d-inline ml-2">
                                                            <input type="checkbox" value="" name="todo5" id="todoCheck5" />
                                                            <label htmlFor="todoCheck5"></label>
                                                        </div>
                                                        <span className="text">Check your messages and notifications</span>
                                                        <small className="badge badge-primary"><i className="far fa-clock"></i> 1 week</small>
                                                        <div className="tools">
                                                            <i className="fas fa-edit"></i>
                                                            <i className="fas fa-trash-o"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span className="handle">
                                                            <i className="fas fa-ellipsis-v"></i>
                                                            <i className="fas fa-ellipsis-v"></i>
                                                        </span>
                                                        <div className="icheck-primary d-inline ml-2">
                                                            <input type="checkbox" value="" name="todo6" id="todoCheck6" />
                                                            <label htmlFor="todoCheck6"></label>
                                                        </div>
                                                        <span className="text">Let theme shine like a star</span>
                                                        <small className="badge badge-secondary"><i className="far fa-clock"></i> 1 month</small>
                                                        <div className="tools">
                                                            <i className="fas fa-edit"></i>
                                                            <i className="fas fa-trash-o"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.card-body --> */}
                                            <div className="card-footer clearfix">
                                                <button type="button" className="btn btn-info float-right"><i className="fas fa-plus"></i> Add item</button>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="col-lg-5 connectedSortable">
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">Quick Example</h3>
                                            </div>
                                            {/* <!-- /.card-header --> */}
                                            {/* <!-- form start --> */}
                                            <form role="form">
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label>Text</label>
                                                        <input type="text" className="form-control" placeholder="Enter ..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Textarea</label>
                                                        <textarea className="form-control" rows="3" placeholder="Enter ..."></textarea>
                                                    </div>
                                                </div>
                                                {/* <!-- /.card-body --> */}

                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </section>
                                </div>

                            </div>

                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ encryptKey: state.encryptKey, login: state.login });

const action = {};

export default connect(mapStateToProps, action)(Dashboard);