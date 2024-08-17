import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/login/Login'
import { Home } from './pages/home/Home'
import { Registro } from './pages/registro/Registro'
import { Ativos } from './pages/ativos/Ativos'
import { Removidos } from './pages/removidos/Removidos'
import { Manutencao } from './pages/manutencao/Manutencao'
import { Estoque } from './pages/estoque/Estoque'

export function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/ativos' element={<Ativos />} />
            <Route path='/removidos' element={<Removidos />} />
            <Route path='/manutencao' element={<Manutencao />} />
            <Route path='/estoque' element={<Estoque />} />
        </Routes>
    )
}