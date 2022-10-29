import {IconEdit, IconStar} from '@douyinfe/semi-icons';
import {Layout, Nav} from '@douyinfe/semi-ui';
import {Outlet, useNavigate} from "react-router-dom";

function App() {
    const {Header, Content,} = Layout;
    const navigate = useNavigate();
    return (
        <Layout className={"fullHeight"}>
            <Header>
                <Nav
                    mode={'horizontal'}
                    items={[
                        {itemKey: 'json', text: 'JSON', icon: <IconStar/>},
                        {itemKey: 'base64', text: 'Base64', icon: <IconEdit/>},
                        // { itemKey: 'urlEncode', text: 'UrlEncode', icon: <IconSetting /> },
                        // { itemKey: 'urlDecode', text: 'UrlDecode', icon: <IconUser /> },
                    ]}
                    onSelect={key => navigate(key.itemKey as string)}
                    header={{
                        text: '常用工具'
                    }}
                />
            </Header>
            <Content style={{padding: "8px", flex: 1}}>
                <Outlet/>
            </Content>
        </Layout>

    )
}

export default App
