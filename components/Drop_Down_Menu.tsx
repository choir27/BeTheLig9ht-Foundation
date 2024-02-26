import {Drop_Down_Menu_Interface} from "../middleware/Interfaces"
import {IoIosArrowDown} from "react-icons/io";
import {Button, ButtonLink} from "./Buttons";
import {useState} from "react";
import { usePathname } from "next/navigation";
import styles from "../css/styles.module.css"

export default function Drop_Down_Menu(props: Drop_Down_Menu_Interface){

    const pathname = usePathname();

    const options = props.options.map((option: string)=>{
        return( ButtonLink({text: option, href: `/events/${option}`, className: pathname.includes(option) ? styles.active : ""}))
    })

    const [toggleNavDisplay, setToggleNavDisplay] = useState<boolean>(false);


    return(
        <li>
            {Button({text: <div className = {`${styles.flex} ${styles.alignCenter}`}>{props.text}<IoIosArrowDown/></div>, onClick: ()=>setToggleNavDisplay(!toggleNavDisplay), href: "", className: styles.menu_button})}

            {toggleNavDisplay ?
            <section className = {`${styles.flex} ${styles.column} ${styles.drop_down_menu}`}>
            {options}
            </section>
            :
            ""
            }
        </li>
    )
    
}