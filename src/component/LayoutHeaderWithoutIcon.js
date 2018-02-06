import React,{
    Component
} from "react" ;
import {
    Container,
    Header,
    Title,
    Content,
    Body,
    Left,
    Center,
    Button,
    Icon,
    Right
} from "native-base" ;
import Color from "color";
export const CHeader = ({theme,children})=>{
    return (
        <Header
            iosBarStyle={theme.iosBarStyle}
            androidStatusBarColor={theme.statusBarColor}
            style={{backgroundColor:theme.headerBackgroundColor}}>
            { children }
        </Header>
    )
}
export const HeaderWithBackIcon = ({theme,children=[],title,onPress=()=>{}})=>{
    return (
        <Header
            iosBarStyle={theme.iosBarStyle}
            androidStatusBarColor={theme.statusBarColor}
            style={{backgroundColor:theme.headerBackgroundColor}}>
            <Left>
                <Button onPress={()=>onPress()} transparent>
                    <Icon style={{color:theme.headerTextColor}} android={"md-arrow-back"} ios={"ios-arrow-back-outline"}/>
                </Button>
            </Left>
            <Body>
                <Title style={{color:theme.headerTextColor}}>
                    {title}
                </Title>
            </Body>
            <Right>
                { children }
            </Right>
        </Header>
    )
}


export default (props)=>{
    let {
        title="",
        theme = {},
        children=[]
    } = props;
    return (
        <Container>
            <CHeader theme={theme}>
                <Body style={{alignItems:"center"}}>
                    <Title style={{color:theme.headerTextColor}}>
                        {title}
                    </Title>
                </Body>
            </CHeader>
            { children }
        </Container>
    )
}