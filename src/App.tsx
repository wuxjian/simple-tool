import {IconEdit, IconStar} from '@douyinfe/semi-icons';
import {Layout, Nav} from '@douyinfe/semi-ui';
import Base64Page from "./pages/base64";

function App() {
  const { Header, Content, } = Layout;
  return (
    <Layout>
      <Header>
        <Nav
          mode={'horizontal'}
          items={[
            { itemKey: 'json', text: 'JSON', icon: <IconStar /> },
            { itemKey: 'base64', text: 'Base64', icon: <IconEdit /> },
            // { itemKey: 'urlEncode', text: 'UrlEncode', icon: <IconSetting /> },
            // { itemKey: 'urlDecode', text: 'UrlDecode', icon: <IconUser /> },
          ]}
          onSelect={key => console.log(key)}
          header={{
            text: '常用工具'
          }}
        />
      </Header>
      <Content style={{padding: "8px", flex: 1}}>
          <Base64Page/>
      </Content>
    </Layout>

  )
}

export default App
