const useAuth = ()=>{
    const auth = localStorage.getItem("isauthenticated");
    if(auth){
        return true;
    }else{
        return false;
    }
}
export default useAuth;