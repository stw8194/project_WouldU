import { CirclePlusIcon } from "@components/icons/CircleIcon";
import { UserIcon } from "@components/icons/UserIcon";
import { isCodeModalAtom } from "@recoil/friend";
import { mypageState } from "@recoil/mypage";
import { userAtom } from "@recoil/user";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { Container } from "../../../styles/layout";
import MatchCodeSubmit from "./modal/MatchCodeSubmit";

const BeforeConnect = () => {
  const user = useRecoilValue(userAtom);
  const [isCodeShow, setIsCodeShow] = useRecoilState(isCodeModalAtom);

  return (
    <ContentArea>
      <div className="info">
        <p>아직 연결된 친구가 없어요!</p>
        <p>일상을 공유하고 싶은 친구의 코드를 입력하여 일기를 연결해 보세요.</p>
        <Profile>
          <User>
            <UserIcon width={100} height={100} />
            <p className="userName">{user?.nickname}</p>
          </User>
          {/* <Mate>
            <UserIcon width={80} height={80} />
            <p className="mateName">?</p>
          </Mate> */}
          <IconBox>
            <CirclePlusIcon />
          </IconBox>
        </Profile>
        <MatchCode>
          <p>나의 연결 코드</p>
          <p className="code">{user?.friendCode}</p>
        </MatchCode>
      </div>
      <div className="button">
        <button onClick={() => setIsCodeShow(true)}>상대방 연결 코드 입력</button>
      </div>
      {isCodeShow && <MatchCodeSubmit />}
    </ContentArea>
  );
};

const ContentArea = styled(Container)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-areas:
    "info"
    "button";
  width: 100%;
  height: 70vh;
  padding: 1.5rem 0;
  .info,
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .info {
    align-self: center;
    p {
      margin: 0 1em;
      &:first-child {
        font-size: ${props => props.theme.fontSize.textLg};
        margin-bottom: 1em;
        font-weight: 500;
      }
    }
  }
  .button {
    align-self: start;
  }

  @media screen and (max-width: 850px) {
    p:nth-child(2) {
      font-size: ${props => props.theme.fontSize.textSm};
      margin: 0 2em;
      text-align: center;
    }
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Profile = styled.div`
  display: flex;
  margin: 5vh;
  position: relative;
`;

const MatchCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .code {
    font-weight: bold;
  }
`;
const IconBox = styled.div`
  position: absolute;
  top: -8px;
  right: -10px;
`;

export default BeforeConnect;
