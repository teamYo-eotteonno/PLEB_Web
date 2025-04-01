import React, { useState } from 'react';
import * as S from "./style";
// import LogoImage from "../../../assets/image/courageLogo.svg";
// import ProfileImage from '../../../assets/image/profile.svg';

const HeaderBar = () => {
    // 코드 예제 - (프실 프로젝트 코드라서 나중에 수정할 예정)
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // 실제 로그인 상태로 변경 필요

    return (
        <S.HeaderBarContainer>
            {/* <S.Logo src={LogoImage} alt="Logo" /> */}
            <S.NavMenu>
                {/* 링크 변경 */}
                <S.MenuItem to="/">홈</S.MenuItem>
                <S.MenuItem to="/post">포스트</S.MenuItem>
                <S.MenuItem to="/ai-interview">AI 면접</S.MenuItem>
            </S.NavMenu>

            {/* <S.ProfileWrapper>
                {isLoggedIn ? (
                    <S.ProfileImage src={ProfileImage} alt="Profile" />
                ) : (
                    <S.LoginButton>
                        로그인
                    </S.LoginButton>
                )}
            </S.ProfileWrapper> */}
        </S.HeaderBarContainer>
    );
};

export default HeaderBar;
