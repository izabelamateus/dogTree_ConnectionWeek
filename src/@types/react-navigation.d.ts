export type AppRootParamList = {
    SignIn: any;
    Home: any;
    NewLink: any;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootParamList {}
    }
}
