export const Sidebar=()=>{
    return(
        <ul className="side-nav">
        <li><a className="active" href="#home"><i className="fa fa-home sidebar-icons" aria-hidden="true"></i>Home Pages</a></li>
        <li className="seperation">community</li>
        <li><a className="active" href="#knowledge"><i class="fa fa-sticky-note-o sidebar-icons" aria-hidden="true"></i>Knowledge Base</a></li>
        <li><a className="active" href="#activity"><i className="fa fa-paper-plane-o sidebar-icons" aria-hidden="true"></i>Activity</a></li>
        <li><a className="active" href="#messages"><i className="fa fa-envelope-open-o sidebar-icons" aria-hidden="true"></i>Messages</a></li>
        <li><a className="active" href="#members"><i className="fa fa-user-o sidebar-icons" aria-hidden="true"></i>Members</a></li>
        <li><a className="active" href="#groups"><i className="fa fa-podcast sidebar-icons" aria-hidden="true"></i>Groups</a></li>
        <li><a className="active" href="#forums"><i className="fa fa-home sidebar-icons" aria-hidden="true"></i>Forums</a></li>
        <li><a className="active" href="#events"><i className="fa fa-calendar-o sidebar-icons" aria-hidden="true"></i>Events</a></li>
        <li><a className="active" href="#documents"><i className="fa fa-file-text-o sidebar-icons" aria-hidden="true"></i>Documents</a></li>
        <li className="seperation">E-learning</li>
        <li><a className="active" href="#allcourse"><i className="fa fa-star-o sidebar-icons" aria-hidden="true"></i>All Courses</a></li>
        <li><a className="active" href="#coursesingle"><i className="fa fa-lightbulb-o sidebar-icons" aria-hidden="true"></i>Course Single</a></li>
        <li><a className="active" href="#lesson"><i className="fa fa-flag-o sidebar-icons" aria-hidden="true"></i>Lesson Single</a></li>
        <li><a className="active" href="#topic"><i className="fa fa-object-group     sidebar-icons" aria-hidden="true"></i>Topic Single</a></li>
        <li className="seperation">wp job manager</li>
      </ul>
      
    )
}