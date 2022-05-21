import styled from "styled-components";

export const Wrapper = styled.div`

    max-width: 1100px;
    background-color: #ebfeff4d;
    border-radius: 10px;
    border: 2px solid #146774;
    padding: 20px;
    text-align: center;
    margin: 20px 0;

    p{
        font-size: 1rem;
    }

`
type ButtonWrapperProps = {
    isCorrect: boolean;
    userClicked: boolean;
}


export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  button:hover {
    border: 3px solid #14677452;
  }
  button {
      cursor: pointer;
      user-select: none;
      font-size: 0.8rem;
      width: 100%;
      height: 40px;
      margin: 5px 0;
      background: ${({ isCorrect, userClicked }) =>
        isCorrect
            ? '#5dc98d' //turn green if is correct
            : !isCorrect && userClicked //user clicked wrong answer
                ? '#ff8d8d' : 'none'};
    border: 3px solid #146774;
    border-radius: 10px;
    color:#000;
}

`;
