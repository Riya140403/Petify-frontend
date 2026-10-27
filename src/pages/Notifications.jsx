import AppSidebar
    from "../components/AppSidebar";


import {
    Heart,
    UserPlus,
    MessageCircle,
    PawPrint
} from "lucide-react";


const notifications = [

    {
        icon:
            <Heart />,

        text:
            "Milo liked your latest post.",

        time:
            "2m"
    },

    {
        icon:
            <UserPlus />,

        text:
            "Charlie started following you.",

        time:
            "18m"
    },

    {
        icon:
            <MessageCircle />,

        text:
            "Snowy commented: So cute! 🐾",

        time:
            "1h"
    },

    {
        icon:
            <PawPrint />,

        text:
            "A new rescue story was added to Petify.",

        time:
            "3h"
    }

];


function Notifications() {

    return (

        <div className="app-shell compact-shell">


            <AppSidebar />


            <main className="wide-page">


                <div className="page-heading">

                    <span>
                        WHAT'S HAPPENING
                    </span>

                    <h1>
                        Notifications
                    </h1>

                </div>


                <div className="notification-list">


                    {
                        notifications.map(
                            (
                                notification,
                                index
                            ) => (

                                <div
                                    className="notification-item"
                                    key={index}
                                >


                                    <div className="notification-icon">

                                        {
                                            notification.icon
                                        }

                                    </div>


                                    <p>

                                        {
                                            notification.text
                                        }

                                    </p>


                                    <span>

                                        {
                                            notification.time
                                        }

                                    </span>


                                </div>

                            )
                        )
                    }


                </div>


            </main>


        </div>

    );

}


export default Notifications;