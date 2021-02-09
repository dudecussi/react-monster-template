import React from 'react';

const Template: React.FC = ({children}) => {
  return (
      <>
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header">
                {/* This is for the sidebar toggle which is visible on mobile only */}
                <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
                {/* ============================================================== */}
                {/* Logo */}
                {/* ============================================================== */}
                <a className="navbar-brand" href="index.html">
                    {/* Logo icon */}
                    <b className="logo-icon">
                    {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                    {/* Dark Logo icon */}
                    <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                    {/* Light Logo icon */}
                    <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                    </b>
                    {/*End Logo icon */}
                    {/* Logo text */}
                    <span className="logo-text">
                    {/* dark Logo text */}
                    <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                    {/* Light Logo text */}    
                    <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                    </span>
                </a>
                {/* ============================================================== */}
                {/* End Logo */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Toggle which is visible on mobile only */}
                {/* ============================================================== */}
                <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
                </div>
                {/* ============================================================== */}
                {/* End Logo */}
                {/* ============================================================== */}
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                {/* ============================================================== */}
                {/* toggle and nav items */}
                {/* ============================================================== */}
                <ul className="navbar-nav float-left mr-auto">
                    <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i className="icon-arrow-left-circle" /></a></li>
                    {/* ============================================================== */}
                    {/* Comment */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-message" />
                        <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
                    </a>
                    <div className="dropdown-menu mailbox animated bounceInDown">
                        <ul className="list-style-none">
                        <li>
                            <div className="font-weight-medium border-bottom rounded-top py-3 px-4">
                            Notifications
                            </div>
                        </li>
                        <li>
                            <div className="message-center notifications position-relative" style={{height: 250}}>
                            {/* Message */}
                            <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="btn btn-danger rounded-circle btn-circle"><i className="fa fa-link" /></span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                <h5 className="message-title mb-0 mt-1">Luanch Admin</h5> <span className="font-12 text-nowrap d-block text-muted text-truncate">Just see the my new admin!</span> <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="btn btn-success rounded-circle btn-circle"><i className="ti-calendar" /></span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                <h5 className="message-title mb-0 mt-1">Event today</h5> <span className="font-12 text-nowrap d-block text-muted text-truncate">Just a reminder that you have event</span> <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="btn btn-info rounded-circle btn-circle"><i className="ti-settings" /></span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                <h5 className="message-title mb-0 mt-1">Settings</h5> <span className="font-12 text-nowrap d-block text-muted text-truncate">You can customize this template as you want</span> <span className="font-12 text-nowrap d-block text-muted">9:08 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="btn btn-primary rounded-circle btn-circle"><i className="ti-user" /></span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                <h5 className="message-title mb-0 mt-1">Pavan kumar</h5> <span className="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span className="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                            </a>
                            </div>
                        </li>
                        <li>
                            <a className="nav-link border-top text-center text-dark pt-3" href="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right" /> </a>
                        </li>
                        </ul>
                    </div>
                    </li>
                    {/* ============================================================== */}
                    {/* End Comment */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* Messages */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id={"2"} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-email" />
                        <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
                    </a>
                    <div className="dropdown-menu mailbox animated bounceInDown">
                        <ul className="list-style-none">
                        <li>
                            <div className="font-weight-medium border-bottom rounded-top py-3 px-4">
                            Messages
                            </div>
                        </li>
                        <li>
                            <div className="message-center message-body position-relative" style={{height: 250}}>
                            {/* Message */}
                            <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="user-img position-relative d-inline-block"> <img src="../assets/images/users/1.jpg" alt="user" className="rounded-circle w-100" /> <span className="profile-status rounded-circle online" /> </span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                <h5 className="message-title mb-0 mt-1">Pavan kumar</h5> <span className="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="user-img position-relative d-inline-block"> <img src="../assets/images/users/2.jpg" alt="user" className="rounded-circle w-100" /> <span className="profile-status rounded-circle busy" /> </span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                <h5 className="message-title mb-0 mt-1">Sonu Nigam</h5> <span className="font-12 text-nowrap d-block text-muted text-truncate">I've sung a song! See you at</span> <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="user-img position-relative d-inline-block"> <img src="../assets/images/users/3.jpg" alt="user" className="rounded-circle w-100" /> <span className="profile-status rounded-circle away" /> </span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                <h5 className="message-title mb-0 mt-1">Arijit Sinh</h5> <span className="font-12 text-nowrap d-block text-muted text-truncate">I am a singer!</span> <span className="font-12 text-nowrap d-block text-muted">9:08 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="user-img position-relative d-inline-block"> <img src="../assets/images/users/4.jpg" alt="user" className="rounded-circle w-100" /> <span className="profile-status rounded-circle offline" /> </span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                <h5 className="message-title mb-0 mt-1">Pavan kumar</h5> <span className="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span className="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                            </a>
                            </div>
                        </li>
                        <li>
                            <a className="nav-link border-top text-center text-dark pt-3" href="javascript:void(0);"> <b>See all e-Mails</b> <i className="fa fa-angle-right" /> </a>
                        </li>
                        </ul>
                    </div>
                    </li>
                    {/* ============================================================== */}
                    {/* End Messages */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* mega menu */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown mega-dropdown"><a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span ><i className="mdi mdi-view-grid" /></span>
                    </a>
                    <div className="dropdown-menu animated bounceInDown">
                        <div className="mega-dropdown-menu row">
                        <div className="col-lg-3 col-xlg-2 mb-4">
                            <h4 className="mb-3">CAROUSEL</h4>
                            {/* CAROUSEL */}
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                <div className="container p-0"> <img className="d-block img-fluid" src="../assets/images/big/img1.jpg" alt="First slide" /></div>
                                </div>
                                <div className="carousel-item">
                                <div className="container p-0"><img className="d-block img-fluid" src="../assets/images/big/img2.jpg" alt="Second slide" /></div>
                                </div>
                                <div className="carousel-item">
                                <div className="container p-0"><img className="d-block img-fluid" src="../assets/images/big/img3.jpg" alt="Third slide" /></div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true" /> <span className="sr-only">Previous</span> </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true" /> <span className="sr-only">Next</span> </a>
                            </div>
                            {/* End CAROUSEL */}
                        </div>
                        <div className="col-lg-3 mb-4">
                            <h4 className="mb-3">ACCORDION</h4>
                            {/* Accordian */}
                            <div id="accordion">
                            <div className="card mb-1">
                                <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Collapsible Group Item #1
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                </div>
                                </div>
                            </div>
                            <div className="card mb-1">
                                <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                </div>
                                </div>
                            </div>
                            <div className="card mb-1">
                                <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Collapsible Group Item #3
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-4">
                            <h4 className="mb-3">CONTACT US</h4>
                            {/* Contact */}
                            <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputname1" placeholder="Enter Name" /> </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter email" /> </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleTextarea" rows={3} placeholder="Message" defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-info">Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-3 col-xlg-4 mb-4">
                            <h4 className="mb-3">List style</h4>
                            {/* List style */}
                            <ul className="list-style-none">
                            <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> You can give link</a></li>
                            <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> Give link</a></li>
                            <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> Another Give link</a></li>
                            <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> Forth link</a></li>
                            <li><a href="javascript:void(0)"><i className="fa fa-check text-success" /> Another fifth link</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </li>
                    {/* ============================================================== */}
                    {/* End mega menu */}
                    {/* ============================================================== */}
                </ul>
                {/* ============================================================== */}
                {/* Right side toggle and nav items */}
                {/* ============================================================== */}
                <ul className="navbar-nav float-right">
                    {/* ============================================================== */}
                    {/* Search */}
                    {/* ============================================================== */}
                    <li className="nav-item search-box d-none d-md-block">
                    <form className="app-search mt-3 mr-2">
                        <input type="text" className="form-control rounded-pill border-0" placeholder="Search for..." /> 
                        <a className="srh-btn"><i className="ti-search" /></a> 
                    </form>
                    </li>
                    {/* ============================================================== */}
                    {/* User profile and search */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" className="rounded-circle" width={31} /></a>
                    <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                        <div className="d-flex no-block align-items-center p-3 mb-2 border-bottom">
                        <div ><img src="../assets/images/users/1.jpg" alt="user" className="rounded" width={80} /></div>
                        <div className="ml-2">
                            <h4 className="mb-0">Steave Jobs</h4>
                            <p className=" mb-0">varun@gmail.com</p>
                            <a href="profile.html" className="btn btn-rounded btn-danger btn-sm">View Profile</a>
                        </div>
                        </div>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ti-user mr-1 ml-1" /> My Profile</a>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ti-wallet mr-1 ml-1" /> My Balance</a>
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ti-email mr-1 ml-1" /> Inbox</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:void(0)"><i className="ti-settings mr-1 ml-1" /> Account Setting</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-power-off mr-1 ml-1" /> Logout</a>
                    </div>
                    </li>
                    {/* ============================================================== */}
                    {/* User profile and search */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* create new */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="flag-icon flag-icon-us" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right  animated bounceInDown" aria-labelledby="navbarDropdown2">
                        <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-us" /> English</a>
                        <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-fr" /> French</a>
                        <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-es" /> Spanish</a>
                        <a className="dropdown-item" href="#"><i className="flag-icon flag-icon-de" /> German</a>
                    </div>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
        <aside className="left-sidebar">
  {/* Sidebar scroll*/}
  <div className="scroll-sidebar">
    {/* Sidebar navigation*/}
    <nav className="sidebar-nav">
      <ul id="sidebarnav">
        {/* User Profile*/}
        <li>
          {/* User profile */}
          <div className="user-profile text-center position-relative pt-4 mt-1">
            {/* User profile image */}
            <div className="profile-img m-auto"> <img src="../assets/images/users/1.jpg" alt="user" className="w-100 rounded-circle" /> </div>
            {/* User profile text*/}
            <div className="profile-text py-1"> <a href="#" className="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe <span className="caret" /></a>
              <div className="dropdown-menu animated flipInY">
                <a href="#" className="dropdown-item"><i className="ti-user" /> My Profile</a>
                <a href="#" className="dropdown-item"><i className="ti-wallet" /> My Balance</a>
                <a href="#" className="dropdown-item"><i className="ti-email" /> Inbox</a>
                <div className="dropdown-divider" /> <a href="#" className="dropdown-item"><i className="ti-settings" /> Account Setting</a>
                <div className="dropdown-divider" /> <a href="login.html" className="dropdown-item"><i className="fa fa-power-off" /> Logout</a>
              </div>
            </div>
          </div>
          {/* End User profile text*/}
        </li>
        {/* User Profile*/}
        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal" /> <span className="hide-menu">Personal</span></li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="home" className="feather-icon" /><span className="hide-menu">Dashboard <span className="badge badge-pill badge-success">5</span></span></a>
          <ul aria-expanded="false" className="collapse  first-level">
            <li className="sidebar-item"><a href="index.html" className="sidebar-link"><i className="mdi mdi-adjust" /><span className="hide-menu"> Modern Dashboard</span></a></li>
            <li className="sidebar-item"><a href="index2.html" className="sidebar-link"><i className="mdi mdi-adjust" /><span className="hide-menu"> Awesome Dashboard </span></a></li>
            <li className="sidebar-item"><a href="index3.html" className="sidebar-link"><i className="mdi mdi-adjust" /><span className="hide-menu"> Classy Dashboard </span></a></li>
            <li className="sidebar-item"><a href="index4.html" className="sidebar-link"><i className="mdi mdi-adjust" /><span className="hide-menu"> Analytical Dashboard </span></a></li>
            <li className="sidebar-item"><a href="index5.html" className="sidebar-link"><i className="mdi mdi-adjust" /><span className="hide-menu"> Minimal Dashboard </span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="sidebar" className="feather-icon" /><span className="hide-menu">Sidebar Type </span></a>
          <ul aria-expanded="false" className="collapse  first-level">
            <li className="sidebar-item"><a href="sidebar-type-minisidebar.html" className="sidebar-link"><i className="mdi mdi-view-quilt" /><span className="hide-menu"> Minisidebar </span></a></li>
            <li className="sidebar-item"><a href="sidebar-type-iconsidebar.html" className="sidebar-link"><i className="mdi mdi-view-parallel" /><span className="hide-menu"> Icon Sidebar </span></a></li>
            <li className="sidebar-item"><a href="sidebar-type-overlaysidebar.html" className="sidebar-link"><i className="mdi mdi-view-day" /><span className="hide-menu"> Overlay Sidebar </span></a></li>
            <li className="sidebar-item"><a href="sidebar-type-fullsidebar.html" className="sidebar-link"><i className="mdi mdi-view-array" /><span className="hide-menu"> Full Sidebar </span></a></li>
            <li className="sidebar-item"><a href="sidebar-type-horizontalsidebar.html" className="sidebar-link"><i className="mdi mdi-view-module" /><span className="hide-menu"> Horizontal Sidebar </span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="clipboard" className="feather-icon" /><span className="hide-menu">Page Layouts </span></a>
          <ul aria-expanded="false" className="collapse  first-level">
            <li className="sidebar-item"><a href="layout-inner-fixed-left-sidebar.html" className="sidebar-link"><i className="mdi mdi-format-align-left" /><span className="hide-menu"> Inner Fixed Left Sidebar </span></a></li>
            <li className="sidebar-item"><a href="layout-inner-fixed-right-sidebar.html" className="sidebar-link"><i className="mdi mdi-format-align-right" /><span className="hide-menu"> Inner Fixed Right Sidebar </span></a></li>
            <li className="sidebar-item"><a href="layout-inner-left-sidebar.html" className="sidebar-link"><i className="mdi mdi-format-float-left" /><span className="hide-menu"> Inner Left Sidebar </span></a></li>
            <li className="sidebar-item"><a href="layout-inner-right-sidebar.html" className="sidebar-link"><i className="mdi mdi-format-float-right" /><span className="hide-menu"> Inner Right Sidebar </span></a></li>
            <li className="sidebar-item"><a href="page-layout-fixed-header.html" className="sidebar-link"><i className="mdi mdi-view-quilt" /><span className="hide-menu"> Fixed Header </span></a></li>
            <li className="sidebar-item"><a href="page-layout-fixed-sidebar.html" className="sidebar-link"><i className="mdi mdi-view-parallel" /><span className="hide-menu"> Fixed Sidebar </span></a></li>
            <li className="sidebar-item"><a href="page-layout-fixed-header-sidebar.html" className="sidebar-link"><i className="mdi mdi-view-column" /><span className="hide-menu"> Fixed Header &amp; Sidebar </span></a></li>
            <li className="sidebar-item"><a href="page-layout-boxed-layout.html" className="sidebar-link"><i className="mdi mdi-view-carousel" /><span className="hide-menu"> Box Layout </span></a></li>
          </ul>
        </li>
        <li className="nav-devider" />
        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal" /> <span className="hide-menu">Apps</span></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="app-chats.html" aria-expanded="false"><i data-feather="message-circle" className="feather-icon" /><span className="hide-menu">Chat Apps</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="app-calendar.html" aria-expanded="false"><i data-feather="calendar" className="feather-icon" /><span className="hide-menu">Calender</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="app-taskboard.html" aria-expanded="false"><i data-feather="layout" className="feather-icon" /><span className="hide-menu">Taskboard</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="app-notes.html" aria-expanded="false"><i data-feather="book" className="feather-icon" /><span className="hide-menu">Notes</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="app-todo.html" aria-expanded="false"><i data-feather="check-circle" className="feather-icon" /><span className="hide-menu">Todo</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="app-invoice.html" aria-expanded="false"><i data-feather="file-text" className="feather-icon" /><span className="hide-menu">Invoice</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="app-contacts.html" aria-expanded="false"><i data-feather="phone" className="feather-icon" /><span className="hide-menu">Contact</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="mail" className="feather-icon" /><span className="hide-menu">Inbox </span></a>
          <ul aria-expanded="false" className="collapse  first-level">
            <li className="sidebar-item"><a href="inbox-email.html" className="sidebar-link"><i className="mdi mdi-email" /><span className="hide-menu"> Email </span></a></li>
            <li className="sidebar-item"><a href="inbox-email-detail.html" className="sidebar-link"><i className="mdi mdi-email-alert" /><span className="hide-menu"> Email Detail </span></a></li>
            <li className="sidebar-item"><a href="inbox-email-compose.html" className="sidebar-link"><i className="mdi mdi-email-secure" /><span className="hide-menu"> Email Compose </span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="bookmark" className="feather-icon" /><span className="hide-menu">Ticket </span></a>
          <ul aria-expanded="false" className="collapse  first-level">
            <li className="sidebar-item"><a href="ticket-list.html" className="sidebar-link"><i className="mdi mdi-book-multiple" /><span className="hide-menu"> Ticket List </span></a></li>
            <li className="sidebar-item"><a href="ticket-detail.html" className="sidebar-link"><i className="mdi mdi-book-plus" /><span className="hide-menu"> Ticket Detail </span></a></li>
          </ul>
        </li>
        <li className="nav-devider" />
        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal" /> <span className="hide-menu">UI</span></li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="cpu" className="feather-icon" /><span className="hide-menu">Ui Elements </span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="ui-buttons.html" className="sidebar-link"><i className="mdi mdi-toggle-switch" /><span className="hide-menu"> Buttons</span></a></li>
            <li className="sidebar-item"><a href="ui-modals.html" className="sidebar-link"><i className="mdi mdi-tablet" /><span className="hide-menu"> Modals</span></a></li>
            <li className="sidebar-item"><a href="ui-tab.html" className="sidebar-link"><i className="mdi mdi-sort-variant" /><span className="hide-menu"> Tab</span></a></li>
            <li className="sidebar-item"><a href="ui-tooltip-popover.html" className="sidebar-link"><i className="mdi mdi-image-filter-vintage" /><span className="hide-menu"> Tooltip &amp; Popover</span></a></li>
            <li className="sidebar-item"><a href="ui-notification.html" className="sidebar-link"><i className="mdi mdi-message-bulleted" /><span className="hide-menu"> Notification</span></a></li>
            <li className="sidebar-item"><a href="ui-progressbar.html" className="sidebar-link"><i className="mdi mdi-poll" /><span className="hide-menu"> Progressbar</span></a></li>
            <li className="sidebar-item"><a href="ui-typography.html" className="sidebar-link"><i className="mdi mdi-format-line-spacing" /><span className="hide-menu"> Typography</span></a></li>
            <li className="sidebar-item"><a href="ui-bootstrap.html" className="sidebar-link"><i className="mdi mdi-bootstrap" /><span className="hide-menu"> Bootstrap Ui</span></a></li>
            <li className="sidebar-item"><a href="ui-breadcrumb.html" className="sidebar-link"><i className="mdi mdi-equal" /><span className="hide-menu"> Breadcrumb</span></a></li>
            <li className="sidebar-item"><a href="ui-list-media.html" className="sidebar-link"><i className="mdi mdi-file-video" /><span className="hide-menu"> List Media</span></a></li>
            <li className="sidebar-item"><a href="ui-grid.html" className="sidebar-link"><i className="mdi mdi-view-module" /><span className="hide-menu"> Grid</span></a></li>
            <li className="sidebar-item"><a href="ui-carousel.html" className="sidebar-link"><i className="mdi mdi-view-carousel" /><span className="hide-menu"> Carousel</span></a></li>
            <li className="sidebar-item"><a href="ui-scrollspy.html" className="sidebar-link"><i className="mdi mdi-application" /><span className="hide-menu"> Scrollspy</span></a></li>
            <li className="sidebar-item"><a href="ui-toasts.html" className="sidebar-link"><i className="mdi mdi-credit-card-scan" /><span className="hide-menu"> Toasts</span></a></li>
            <li className="sidebar-item"><a href="ui-spinner.html" className="sidebar-link"><i className="mdi mdi-apple-safari" /><span className="hide-menu"> Spinner</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="copy" className="feather-icon" /><span className="hide-menu">Cards</span></a>
          <ul aria-expanded="false" className="collapse  first-level">
            <li className="sidebar-item"><a href="ui-cards.html" className="sidebar-link"><i className="mdi mdi-layers" /><span className="hide-menu"> Basic Cards</span></a></li>
            <li className="sidebar-item"><a href="ui-card-customs.html" className="sidebar-link"><i className="mdi mdi-credit-card-scan" /><span className="hide-menu">Custom Cards</span></a></li>
            <li className="sidebar-item"><a href="ui-card-weather.html" className="sidebar-link"><i className="mdi mdi-weather-fog" /><span className="hide-menu">Weather Cards</span></a></li>
            <li className="sidebar-item"><a href="ui-card-draggable.html" className="sidebar-link"><i className="mdi mdi-bandcamp" /><span className="hide-menu">Draggable Cards</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="hard-drive" className="feather-icon" /><span className="hide-menu">Components</span></a>
          <ul aria-expanded="false" className="collapse  first-level">
            <li className="sidebar-item"><a href="component-sweetalert.html" className="sidebar-link"><i className="mdi mdi-layers" /><span className="hide-menu"> Sweet Alert</span></a></li>
            <li className="sidebar-item"><a href="component-nestable.html" className="sidebar-link"><i className="mdi mdi-credit-card-scan" /><span className="hide-menu">Nestable</span></a></li>
            <li className="sidebar-item"><a href="component-noui-slider.html" className="sidebar-link"><i className="mdi mdi-weather-fog" /><span className="hide-menu">Noui slider</span></a></li>
            <li className="sidebar-item"><a href="component-rating.html" className="sidebar-link"><i className="mdi mdi-bandcamp" /><span className="hide-menu">Rating</span></a></li>
            <li className="sidebar-item"><a href="component-toastr.html" className="sidebar-link"><i className="mdi mdi-poll" /><span className="hide-menu">Toastr</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="grid" className="feather-icon" /><span className="hide-menu">Widgets </span></a>
          <ul aria-expanded="false" className="collapse  first-level">
            <li className="sidebar-item"><a href="widgets-apps.html" className="sidebar-link"><i className="mdi mdi-comment-processing-outline" /><span className="hide-menu"> Apps Widgets</span></a></li>
            <li className="sidebar-item"><a href="widgets-data.html" className="sidebar-link"><i className="mdi mdi-calendar" /><span className="hide-menu"> Data Widgets</span></a></li>
            <li className="sidebar-item"><a href="widgets-charts.html" className="sidebar-link"><i className="mdi mdi-bulletin-board" /><span className="hide-menu"> Charts Widgets</span></a></li>
          </ul>
        </li>
        <li className="nav-devider" />
        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal" /> <span className="hide-menu">Forms</span></li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="layers" className="feather-icon" /><span className="hide-menu">Form Elements</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="form-inputs.html" className="sidebar-link"><i className="mdi mdi-priority-low" /><span className="hide-menu"> Forms Input</span></a></li>
            <li className="sidebar-item"><a href="form-input-groups.html" className="sidebar-link"><i className="mdi mdi-rounded-corner" /><span className="hide-menu"> Input Groups</span></a></li>
            <li className="sidebar-item"><a href="form-input-grid.html" className="sidebar-link"><i className="mdi mdi-select-all" /><span className="hide-menu"> Input Grid</span></a></li>
            <li className="sidebar-item"><a href="form-checkbox-radio.html" className="sidebar-link"><i className="mdi mdi-shape-plus" /><span className="hide-menu"> Checkboxes &amp; Radios</span></a></li>
            <li className="sidebar-item"><a href="form-bootstrap-touchspin.html" className="sidebar-link"><i className="mdi mdi-switch" /><span className="hide-menu"> Bootstrap Touchspin</span></a></li>
            <li className="sidebar-item"><a href="form-bootstrap-switch.html" className="sidebar-link"><i className="mdi mdi-toggle-switch-off" /><span className="hide-menu"> Bootstrap Switch</span></a></li>
            <li className="sidebar-item"><a href="form-select2.html" className="sidebar-link"><i className="mdi mdi-relative-scale" /><span className="hide-menu"> Select2</span></a></li>
            <li className="sidebar-item"><a href="form-dual-listbox.html" className="sidebar-link"><i className="mdi mdi-tab-unselected" /><span className="hide-menu"> Dual Listbox</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="file-text" className="feather-icon" /><span className="hide-menu">Form Layouts</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="form-basic.html" className="sidebar-link"><i className="mdi mdi-vector-difference-ba" /><span className="hide-menu"> Basic Forms</span></a></li>
            <li className="sidebar-item"><a href="form-material.html" className="sidebar-link"><i className="mdi mdi-vector-difference-ba" /><span className="hide-menu"> Material Forms</span></a></li>
            <li className="sidebar-item"><a href="form-horizontal.html" className="sidebar-link"><i className="mdi mdi-file-document-box" /><span className="hide-menu"> Form Horizontal</span></a></li>
            <li className="sidebar-item"><a href="form-actions.html" className="sidebar-link"><i className="mdi mdi-code-greater-than" /><span className="hide-menu"> Form Actions</span></a></li>
            <li className="sidebar-item"><a href="form-row-separator.html" className="sidebar-link"><i className="mdi mdi-code-equal" /><span className="hide-menu"> Row Separator</span></a></li>
            <li className="sidebar-item"><a href="form-bordered.html" className="sidebar-link"><i className="mdi mdi-flip-to-front" /><span className="hide-menu"> Form Bordered</span></a></li>
            <li className="sidebar-item"><a href="form-striped-row.html" className="sidebar-link"><i className="mdi mdi-content-duplicate" /><span className="hide-menu"> Striped Rows</span></a></li>
            <li className="sidebar-item"><a href="form-detail.html" className="sidebar-link"><i className="mdi mdi-cards-outline" /><span className="hide-menu"> Form Detail</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="package" className="feather-icon" /><span className="hide-menu">Form Addons</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="form-paginator.html" className="sidebar-link"><i className="mdi mdi-export" /><span className="hide-menu"> Paginator</span></a></li>
            <li className="sidebar-item"><a href="form-img-cropper.html" className="sidebar-link"><i className="mdi mdi-crop" /><span className="hide-menu"> Image Cropper</span></a></li>
            <li className="sidebar-item"><a href="form-dropzone.html" className="sidebar-link"><i className="mdi mdi-crosshairs-gps" /><span className="hide-menu"> Dropzone</span></a></li>
            <li className="sidebar-item"><a href="form-mask.html" className="sidebar-link"><i className="mdi mdi-box-shadow" /><span className="hide-menu"> Form Mask</span></a></li>
            <li className="sidebar-item"><a href="form-typeahead.html" className="sidebar-link"><i className="mdi mdi-cards-variant" /><span className="hide-menu"> Form Typehead</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="check-square" className="feather-icon" /><span className="hide-menu">Form Validation</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="form-bootstrap-validation.html" className="sidebar-link"><i className="mdi mdi-credit-card-scan" /><span className="hide-menu"> Bootstrap Validation</span></a></li>
            <li className="sidebar-item"><a href="form-custom-validation.html" className="sidebar-link"><i className="mdi mdi-credit-card-plus" /><span className="hide-menu"> Custom Validation</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="droplet" className="feather-icon" /><span className="hide-menu">Form Pickers</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="form-picker-colorpicker.html" className="sidebar-link"><i className="mdi mdi-calendar-plus" /><span className="hide-menu"> Form Colorpicker</span></a></li>
            <li className="sidebar-item"><a href="form-picker-datetimepicker.html" className="sidebar-link"><i className="mdi mdi-calendar-clock" /><span className="hide-menu"> Form Datetimepicker</span></a></li>
            <li className="sidebar-item"><a href="form-picker-bootstrap-rangepicker.html" className="sidebar-link"><i className="mdi mdi-calendar-range" /><span className="hide-menu"> Form Bootstrap Rangepicker</span></a></li>
            <li className="sidebar-item"><a href="form-picker-bootstrap-datepicker.html" className="sidebar-link"><i className="mdi mdi-calendar-check" /><span className="hide-menu"> Form Bootstrap Datepicker</span></a></li>
            <li className="sidebar-item"><a href="form-picker-material-datepicker.html" className="sidebar-link"><i className="mdi mdi-calendar-text" /><span className="hide-menu"> Form Material Datepicker</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="edit" className="feather-icon" /><span className="hide-menu">Form Editor</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="form-editor-ckeditor.html" className="sidebar-link"><i className="mdi mdi-drawing" /><span className="hide-menu">Ck Editor</span></a></li>
            <li className="sidebar-item"><a href="form-editor-quill.html" className="sidebar-link"><i className="mdi mdi-drupal" /><span className="hide-menu">Quill Editor</span></a></li>
            <li className="sidebar-item"><a href="form-editor-summernote.html" className="sidebar-link"><i className="mdi mdi-brightness-6" /><span className="hide-menu">Summernote Editor</span></a></li>
            <li className="sidebar-item"><a href="form-editor-tinymce.html" className="sidebar-link"><i className="mdi mdi-bowling" /><span className="hide-menu">Tinymce Edtor</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="form-wizard.html" aria-expanded="false"><i data-feather="credit-card" className="feather-icon" /><span className="hide-menu">Form Wizard</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="form-repeater.html" aria-expanded="false"><i data-feather="crop" className="feather-icon" /><span className="hide-menu">Form Repeater</span></a></li>
        <li className="nav-devider" />
        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal" /> <span className="hide-menu">Tables</span></li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="codepen" className="feather-icon" /><span className="hide-menu">Bootstrap Tables</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="table-basic.html" className="sidebar-link"><i className="mdi mdi-border-all" /><span className="hide-menu">Basic Table </span></a></li>
            <li className="sidebar-item"><a href="table-dark-basic.html" className="sidebar-link"><i className="mdi mdi-border-left" /><span className="hide-menu">Dark Basic Table </span></a></li>
            <li className="sidebar-item"><a href="table-sizing.html" className="sidebar-link"><i className="mdi mdi-border-outside" /><span className="hide-menu">Sizing Table </span></a></li>
            <li className="sidebar-item"><a href="table-layout-coloured.html" className="sidebar-link"><i className="mdi mdi-border-bottom" /><span className="hide-menu">Coloured Table Layout</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="hard-drive" className="feather-icon" /><span className="hide-menu">Datatables</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="table-datatable-basic.html" className="sidebar-link"><i className="mdi mdi-border-vertical" /><span className="hide-menu"> Basic Initialisation</span></a></li>
            <li className="sidebar-item"><a href="table-datatable-api.html" className="sidebar-link"><i className="mdi mdi-blur-linear" /><span className="hide-menu"> API</span></a></li>
            <li className="sidebar-item"><a href="table-datatable-advanced.html" className="sidebar-link"><i className="mdi mdi-border-style" /><span className="hide-menu"> Advanced Initialisation</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-jsgrid.html" aria-expanded="false"><i data-feather="disc" className="feather-icon" /><span className="hide-menu">Table Jsgrid</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-responsive.html" aria-expanded="false"><i data-feather="smartphone" className="feather-icon" /><span className="hide-menu">Table Responsive</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-footable.html" aria-expanded="false"><i data-feather="command" className="feather-icon" /><span className="hide-menu">Table Footable</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-editable.html" aria-expanded="false"><i data-feather="edit-2" className="feather-icon" /><span className="hide-menu">Table Editable</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="table-bootstrap.html" aria-expanded="false"><i data-feather="target" className="feather-icon" /><span className="hide-menu">Table Bootstrap</span></a></li>
        <li className="nav-devider" />
        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal" /> <span className="hide-menu">Charts</span></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="chart-morris.html" aria-expanded="false"><i data-feather="loader" className="feather-icon" /><span className="hide-menu"> Morris Chart</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="chart-chart-js.html" aria-expanded="false"><i data-feather="pie-chart" className="feather-icon" /><span className="hide-menu">Chartjs</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="chart-sparkline.html" aria-expanded="false"><i data-feather="radio" className="feather-icon" /><span className="hide-menu">Sparkline Chart</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="chart-chartist.html" aria-expanded="false"><i data-feather="trello" className="feather-icon" /><span className="hide-menu">Chartis Chart</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="slack" className="feather-icon" /><span className="hide-menu">C3 Charts</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="chart-c3-axis.html" className="sidebar-link"><i className="mdi mdi-arrange-bring-to-front" /> <span className="hide-menu">Axis Chart</span></a></li>
            <li className="sidebar-item"><a href="chart-c3-bar.html" className="sidebar-link"><i className="mdi mdi-arrange-send-to-back" /> <span className="hide-menu">Bar Chart</span></a></li>
            <li className="sidebar-item"><a href="chart-c3-data.html" className="sidebar-link"><i className="mdi mdi-backup-restore" /> <span className="hide-menu">Data Chart</span></a></li>
            <li className="sidebar-item"><a href="chart-c3-line.html" className="sidebar-link"><i className="mdi mdi-backburger" /> <span className="hide-menu">Line Chart</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="bar-chart-2" className="feather-icon" /><span className="hide-menu">Echarts</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="chart-echart-basic.html" className="sidebar-link"><i className="mdi mdi-chart-line" /> <span className="hide-menu">Basic Charts</span></a></li>
            <li className="sidebar-item"><a href="chart-echart-bar.html" className="sidebar-link"><i className="mdi mdi-chart-scatterplot-hexbin" /> <span className="hide-menu">Bar Chart</span></a></li>
            <li className="sidebar-item"><a href="chart-echart-pie-doughnut.html" className="sidebar-link"><i className="mdi mdi-chart-pie" /> <span className="hide-menu">Pie &amp; Doughnut Chart</span></a></li>
          </ul>
        </li>
        <li className="nav-devider" />
        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal" /> <span className="hide-menu">Sample Pages</span></li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="shopping-cart" className="feather-icon" /><span className="hide-menu">Ecommerce Pages</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="eco-products.html" className="sidebar-link"><i className="mdi mdi-cards-variant" /> <span className="hide-menu">Products</span></a></li>
            <li className="sidebar-item"><a href="eco-products-cart.html" className="sidebar-link"><i className="mdi mdi-cart" /> <span className="hide-menu">Products Cart</span></a></li>
            <li className="sidebar-item"><a href="eco-products-edit.html" className="sidebar-link"><i className="mdi mdi-cart-plus" /> <span className="hide-menu">Products Edit</span></a></li>
            <li className="sidebar-item"><a href="eco-products-detail.html" className="sidebar-link"><i className="mdi mdi-camera-burst" /> <span className="hide-menu">Product Details</span></a></li>
            <li className="sidebar-item"><a href="eco-products-orders.html" className="sidebar-link"><i className="mdi mdi-chart-pie" /> <span className="hide-menu">Product Orders</span></a></li>
            <li className="sidebar-item"><a href="eco-products-checkout.html" className="sidebar-link"><i className="mdi mdi-clipboard-check" /> <span className="hide-menu">Products Checkout</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="book-open" className="feather-icon" /><span className="hide-menu">Sample Pages </span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="starter-kit.html" className="sidebar-link"><i className="mdi mdi-crop-free" /> <span className="hide-menu">Starter Kit</span></a></li>
            <li className="sidebar-item"><a href="pages-animation.html" className="sidebar-link"><i className="mdi mdi-debug-step-over" /> <span className="hide-menu">Animation</span></a></li>
            <li className="sidebar-item"><a href="pages-search-result.html" className="sidebar-link"><i className="mdi mdi-search-web" /> <span className="hide-menu">Search Result</span></a></li>
            <li className="sidebar-item"><a href="pages-gallery.html" className="sidebar-link"><i className="mdi mdi-camera-iris" /> <span className="hide-menu">Gallery</span></a></li>
            <li className="sidebar-item"><a href="pages-treeview.html" className="sidebar-link"><i className="mdi mdi-file-tree" /> <span className="hide-menu">Treeview</span></a></li>
            <li className="sidebar-item"><a href="pages-block-ui.html" className="sidebar-link"><i className="mdi mdi-codepen" /> <span className="hide-menu">Block UI</span></a></li>
            <li className="sidebar-item"><a href="pages-session-timeout.html" className="sidebar-link"><i className="mdi mdi-timer-off" /> <span className="hide-menu">Session Timeout</span></a></li>
            <li className="sidebar-item"><a href="pages-session-idle-timeout.html" className="sidebar-link"><i className="mdi mdi-timer-sand-empty" /> <span className="hide-menu">Session Idle Timeout</span></a></li>
            <li className="sidebar-item"><a href="pages-utility-classes.html" className="sidebar-link"><i className="mdi mdi-tune" /> <span className="hide-menu">Helper Classes</span></a></li>
            <li className="sidebar-item"><a href="pages-maintenance.html" className="sidebar-link"><i className="mdi mdi-camera-iris" /> <span className="hide-menu">Maintenance Page</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="lock" className="feather-icon" /><span className="hide-menu">Authentication</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="authentication-login1.html" className="sidebar-link"><i className="mdi mdi-account-key" /><span className="hide-menu"> Login </span></a></li>
            <li className="sidebar-item"><a href="authentication-login2.html" className="sidebar-link"><i className="mdi mdi-account-key" /><span className="hide-menu"> Login 2 </span></a></li>
            <li className="sidebar-item"><a href="authentication-register1.html" className="sidebar-link"><i className="mdi mdi-account-plus" /><span className="hide-menu"> Register</span></a></li>
            <li className="sidebar-item"><a href="authentication-register2.html" className="sidebar-link"><i className="mdi mdi-account-plus" /><span className="hide-menu"> Register 2</span></a></li>
            <li className="sidebar-item"><a href="authentication-lockscreen.html" className="sidebar-link"><i className="mdi mdi-account-off" /><span className="hide-menu"> Lockscreen</span></a></li>
            <li className="sidebar-item"><a href="authentication-recover-password.html" className="sidebar-link"><i className="mdi mdi-account-convert" /><span className="hide-menu"> Recover password</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="users" className="feather-icon" /><span className="hide-menu">Users</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="ui-user-card.html" className="sidebar-link"><i className="mdi mdi-account-box" /> <span className="hide-menu"> User Card </span></a></li>
            <li className="sidebar-item"><a href="pages-profile.html" className="sidebar-link"><i className="mdi mdi-account-network" /><span className="hide-menu"> User Profile</span></a></li>
            <li className="sidebar-item"><a href="ui-user-contacts.html" className="sidebar-link"><i className="mdi mdi-account-star-variant" /><span className="hide-menu"> User Contact</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="paperclip" className="feather-icon" /><span className="hide-menu">Invoice</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="pages-invoice.html" className="sidebar-link"><i className="mdi mdi-vector-triangle" /><span className="hide-menu"> Invoice Layout </span></a></li>
            <li className="sidebar-item"><a href="pages-invoice-list.html" className="sidebar-link"><i className="mdi mdi-vector-rectangle" /><span className="hide-menu"> Invoice List</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="map" className="feather-icon" /><span className="hide-menu">Maps</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="map-google.html" className="sidebar-link"><i className="mdi mdi-google-maps" /><span className="hide-menu"> Google Map </span></a></li>
            <li className="sidebar-item"><a href="map-vector.html" className="sidebar-link"><i className="mdi mdi-map-marker-radius" /><span className="hide-menu"> Vector Map</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="feather" className="feather-icon" /><span className="hide-menu">Icons</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="icon-material.html" className="sidebar-link"><i className="mdi mdi-emoticon" /> <span className="hide-menu"> Material Icons </span></a></li>
            <li className="sidebar-item"><a href="icon-fontawesome.html" className="sidebar-link"><i className="mdi mdi-emoticon-cool" /><span className="hide-menu"> Fontawesome Icons</span></a></li>
            <li className="sidebar-item"><a href="icon-themify.html" className="sidebar-link"><i className="mdi mdi-chart-bubble" /><span className="hide-menu"> Themify Icons</span></a></li>
            <li className="sidebar-item"><a href="icon-weather.html" className="sidebar-link"><i className="mdi mdi-weather-cloudy" /><span className="hide-menu"> Weather Icons</span></a></li>
            <li className="sidebar-item"><a href="icon-simple-lineicon.html" className="sidebar-link"><i className="mdi mdi mdi-image-broken-variant" /> <span className="hide-menu"> Simple Line icons</span></a></li>
            <li className="sidebar-item"><a href="icon-flag.html" className="sidebar-link"><i className="mdi mdi-flag-triangle" /><span className="hide-menu"> Flag Icons</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="activity" className="feather-icon" /><span className="hide-menu">Timeline</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="timeline-center.html" className="sidebar-link"><i className="mdi mdi-clock-fast" /> <span className="hide-menu"> Center Timeline </span></a></li>
            <li className="sidebar-item"><a href="timeline-horizontal.html" className="sidebar-link"><i className="mdi mdi-clock-end" /><span className="hide-menu"> Horizontal Timeline</span></a></li>
            <li className="sidebar-item"><a href="timeline-left.html" className="sidebar-link"><i className="mdi mdi-clock-in" /><span className="hide-menu"> Left Timeline</span></a></li>
            <li className="sidebar-item"><a href="timeline-right.html" className="sidebar-link"><i className="mdi mdi-clock-start" /><span className="hide-menu"> Right Timeline</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="mail" className="feather-icon" /><span className="hide-menu">Email Template</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="email-templete-alert.html" className="sidebar-link"><i className="mdi mdi-message-alert" /> <span className="hide-menu"> Alert </span></a></li>
            <li className="sidebar-item"><a href="email-templete-basic.html" className="sidebar-link"><i className="mdi mdi-message-bulleted" /><span className="hide-menu"> Basic</span></a></li>
            <li className="sidebar-item"><a href="email-templete-billing.html" className="sidebar-link"><i className="mdi mdi-message-draw" /><span className="hide-menu"> Billing</span></a></li>
            <li className="sidebar-item"><a href="email-templete-password-reset.html" className="sidebar-link"><i className="mdi mdi-message-bulleted-off" /><span className="hide-menu"> Password-Reset</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="user-x" className="feather-icon" /><span className="hide-menu">Error Pages</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="error-400.html" className="sidebar-link"><i className="mdi mdi-alert-outline" /> <span className="hide-menu"> Error 400 </span></a></li>
            <li className="sidebar-item"><a href="error-403.html" className="sidebar-link"><i className="mdi mdi-alert-outline" /><span className="hide-menu"> Error 403</span></a></li>
            <li className="sidebar-item"><a href="error-404.html" className="sidebar-link"><i className="mdi mdi-alert-outline" /><span className="hide-menu"> Error 404</span></a></li>
            <li className="sidebar-item"><a href="error-500.html" className="sidebar-link"><i className="mdi mdi-alert-outline" /><span className="hide-menu"> Error 500</span></a></li>
            <li className="sidebar-item"><a href="error-503.html" className="sidebar-link"><i className="mdi mdi-alert-outline" /><span className="hide-menu"> Error 503</span></a></li>
          </ul>
        </li>
        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i data-feather="git-pull-request" className="feather-icon" /><span className="hide-menu">Multi level dd</span></a>
          <ul aria-expanded="false" className="collapse first-level">
            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><i className="mdi mdi-octagram" /><span className="hide-menu"> item 1.1</span></a></li>
            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><i className="mdi mdi-octagram" /><span className="hide-menu"> item 1.2</span></a></li>
            <li className="sidebar-item"> <a className="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-playlist-plus" /> <span className="hide-menu">Menu 1.3</span></a>
              <ul aria-expanded="false" className="collapse second-level">
                <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><i className="mdi mdi-octagram" /><span className="hide-menu"> item 1.3.1</span></a></li>
                <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><i className="mdi mdi-octagram" /><span className="hide-menu"> item 1.3.2</span></a></li>
                <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><i className="mdi mdi-octagram" /><span className="hide-menu"> item 1.3.3</span></a></li>
                <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><i className="mdi mdi-octagram" /><span className="hide-menu"> item 1.3.4</span></a></li>
              </ul>
            </li>
            <li className="sidebar-item"><a href="javascript:void(0)" className="sidebar-link"><i className="mdi mdi-playlist-check" /><span className="hide-menu"> item 1.4</span></a></li>
          </ul>
        </li>
        <li className="nav-devider" />
        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal" /> <span className="hide-menu">Extra</span></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="../../../Documentation/document.html" aria-expanded="false"><i data-feather="edit-3" className="feather-icon" /><span className="hide-menu">Documentation</span></a></li>
        <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link" href="authentication-login1.html" aria-expanded="false"><i data-feather="log-out" className="feather-icon" /><span className="hide-menu">Log Out</span></a></li>
      </ul>
    </nav>
    {/* End Sidebar navigation */}
  </div>
  {/* End Sidebar scroll*/}
  {/* Bottom points*/}
  <div className="sidebar-footer">
    {/* item*/}
    <a href="#" className="link" data-toggle="tooltip" title="Settings"><i className="ti-settings" /></a>
    {/* item*/}
    <a href="#" className="link" data-toggle="tooltip" title="Email"><i className="mdi mdi-gmail" /></a>
    {/* item*/}
    <a href="#" className="link" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power" /></a>
  </div>
  {/* End Bottom points*/}
</aside>

    <div className="page-wrapper">

        <div className="page-breadcrumb">
            <div className="row">
                <div className="col-md-5 align-self-center">
                <h3 className="page-title">Dashboard</h3>
                <div className="d-flex align-items-center">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                    </nav>
                </div>
                </div>
                <div className="col-md-7 align-self-center d-none d-md-block">
                <button className="btn float-right btn-success"><i className="mdi mdi-plus-circle" /> Create</button>
                <div className="dropdown float-right mr-2 hidden-sm-down">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> January 2020 </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a className="dropdown-item" href="#">February 2020</a> <a className="dropdown-item" href="#">March 2020</a> <a className="dropdown-item" href="#">April 2020</a> </div>
                </div>
                </div>
            </div>
        </div>

        {children}
        {/* CONTEUDO ESPECIFICO POR PAGINA */}
    </div>
    
    </>

  );
}


export default Template;