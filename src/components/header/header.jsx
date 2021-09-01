
import { HashRouter, Route, Switch, Redirect,Link } from 'react-router-dom'
import "./header.scss"


export default function Header(props) {
    return (
      <div className="Header">
        
        <HashRouter>
        <Link  to="/"><img className="com-icon" src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/e82b59e4ad068b73bcdf6ad80d4d98e7~300x300.image" alt="" /></Link>
            <Link className="header-item" to="/phone">手机</Link>
            <Link className="header-item" to="/pc">电脑</Link>
            <Link className="header-item" to="/pad">平板</Link>
        </HashRouter>
      </div>
    );
}