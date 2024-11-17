import home from '../../../public/icons/Home.png'
import Activity from '../../../public/icons/Activity.png'
import Calendar from '../../../public/icons/Calendar.png'
import Chat from '../../../public/icons/Chat.png'
import Finance from '../../../public/icons/Finance.png'
import food from '../../../public/icons/food.png'
import Students from '../../../public/icons/Student.png'
import Teacher from '../../../public/icons/Teacher.png'
import User from '../../../public/icons/User.png'
export const sideBarData = [
    {
        id:1,
        barData: 'Dashboard',
        img:home,
        href:'/'
    },
    {
        id:2,
        barData: 'Students',
        img:Students,
        href:'/students'
    },
    {
        id:3,
        barData: 'Teachers',
        img:Teacher,
        href:'/teachers'
    },
    {
        id:4,
        barData: 'Events',
        img:Calendar,
        href:'/calendar'
    },
    {
        id:5,
        barData: 'Finance',
        img:Finance,
        href:'/finance'
    },
    {
        id:6,
        barData: 'Food',
        img:food,
        href:'/food'
    },
    {
        id:7,
        barData: 'User',
        img:User,
        href:'/user'
    },
    {
        id:8,
        barData: 'Chat',
        img:Chat,
        href:'/chat'
    },
    {
        id:9,
        barData: 'LatestActivity',
        img:Activity,
        href:'/activity'
    },
    
]