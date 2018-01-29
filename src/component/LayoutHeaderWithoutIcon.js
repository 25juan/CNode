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
export default (props)=>{
    let {
        title="",
        theme = {},
        children=[]
    } = props;
    return (
        <Container>
            <Header
                iosBarStyle={theme.iosBarStyle}
                androidStatusBarColor={Color(theme.headerBackgroundColor).darken(0.5)}
                style={{backgroundColor:theme.headerBackgroundColor}}>
                <Body>
                    <Title style={{color:theme.headerTextColor}}>
                        {title}
                    </Title>
                </Body>
            </Header>
            { children }
        </Container>
    )
}