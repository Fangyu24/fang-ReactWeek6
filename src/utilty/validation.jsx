export const emailValidation={
    required:"請輸入email",
    pattern:{
      value: /^\S+@\S+$/i,
      message: "Email 格式不正確",
    }
}