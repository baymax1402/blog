import { Avatar, Divider } from 'antd';
import '../static/style/components/author.css';
const Author = () => {
    return (
        <div className="author-div com-box">
            <div>
                <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" />
            </div>
            <div className="author-introduction">
                <Divider>社交账号</Divider>
                <Avatar size={40} icon="github" className="account" />
                <Avatar size={40} icon="qq" className="account" />
                <Avatar size={40} icon="wechat" className="account" />
            </div>
        </div>
    )
}

export default Author;