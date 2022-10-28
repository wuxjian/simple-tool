import { IconEdit, IconSetting, IconStar, IconUser } from '@douyinfe/semi-icons';
import { Layout, Nav } from '@douyinfe/semi-ui';

function App() {
  const { Header, Content, } = Layout;
  return (
    <Layout>
      <Header>
        <Nav
          mode={'horizontal'}
          items={[
            { itemKey: 'json', text: 'JSON', icon: <IconStar /> },
            { itemKey: 'base64', text: 'base64', icon: <IconEdit /> },
            { itemKey: 'urlEncode', text: 'UrlEncode', icon: <IconSetting /> },
            { itemKey: 'urlDecode', text: 'UrlDecode', icon: <IconUser /> },
          ]}
          onSelect={key => console.log(key)}
          header={{
            text: '常用工具'
          }}
        />
      </Header>
      <Content>
          
      </Content>
    </Layout>

  )
}

export default App
