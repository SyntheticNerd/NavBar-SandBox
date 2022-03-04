import {
  NavBarCont,
  NavFolder,
  LinkList,
  IconsList,
  LinkCont,
  NavLink,
  NavIcon,
  SandwichIcon,
  Line1,
  Line2,
  Line3,
  TabIndicator,
  LogoIcon
} from "../styles/NavStyle";
import { ReactComponent as LinkedinIcon } from "../icons/linkedinIcon.svg";
import { ReactComponent as BehanceIcon } from "../icons/behanceIcon.svg";
import { ReactComponent as GithubIcon } from "../icons/gitHubIcon.svg";
import { ReactComponent as BlankIcon } from "../icons/blankIcon.svg";
import { ReactComponent as LanternIcon } from "../icons/lantern_icon_gold_elipse.svg";
import { useState } from "react";
export default function Nav() {
  const [navModal, setNavModal] = useState(false);
  return (
    <NavBarCont navModal={navModal}>
      <LogoIcon>
        <LanternIcon style={{ height: "100%", scale: "1.3" }} />
      </LogoIcon>

      <NavFolder>
        <LinkList navModal={navModal}>
          <LinkCont>
            <NavLink>
              Home
              <TabIndicator currentTab={true} />
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink>
              Portfolio
              <TabIndicator currentTab={false} />
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink>
              About
              <TabIndicator currentTab={false} />
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink>
              Contact
              <TabIndicator currentTab={false} />
            </NavLink>
          </LinkCont>
        </LinkList>
        <IconsList>
          <LinkCont>
            <NavIcon>
              <LinkedinIcon />
            </NavIcon>
          </LinkCont>
          <LinkCont>
            <NavIcon>
              <BehanceIcon />
            </NavIcon>
          </LinkCont>
          <LinkCont>
            <NavIcon>
              <GithubIcon />
            </NavIcon>
          </LinkCont>
          <LinkCont>
            <SandwichIcon
              onClick={() => {
                setNavModal(!navModal);
              }}
            >
              <BlankIcon />
              <Line1 navModal={navModal} />
              <Line2 navModal={navModal} />
              <Line3 navModal={navModal} />
            </SandwichIcon>
          </LinkCont>
        </IconsList>
      </NavFolder>
    </NavBarCont>
  );
}
