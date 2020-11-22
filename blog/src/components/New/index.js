import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../firebase';
import './new.css';

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descricao: '',
            image: null,
            url: '',
            titulo: '',
            alert: ''
        }
        this.cadastrar = this.cadastrar.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    componentDidMount() {
        //verifica se tem algum usuário logado
        if (!firebase.getCurrent()) {
            this.props.history.replace('/');
            return null;
        }
    }

    handleFile = async(e) =>{
        e.preventDefault();
        if(e.target.files[0]){
            const imagem = e.target.files[0];
            if(imagem.type === 'image/png' || imagem.type === 'image/jpeg'){
                await this.setState({image: imagem});
                this.handleUpload();
            }else{
                alert('Envie uma imagem do tipo PNG ou JPEG');
                this.setState({image: null});
                return null;
            }
        }
    }

    cadastrar = async (e) => {
        e.preventDefault();

        if (this.state.titulo !== ''
            && this.state.image !== ''
            && this.state.descricao !== '') {

            let posts = firebase.app.ref('Posts');
            let chave = posts.push().key;
            await posts.child(chave).set({
                titulo: this.state.titulo,
                image: this.state.image,
                descricao: this.state.descricao,
                autor: localStorage.nome
            });
            this.props.history.push('/dashboard');
        } else {
            this.setState({ alert: 'Preencha todos os campos!' })
        }
    }

    handleUpload = async() =>{
        const {image} = this.state;
        const currentUid = firebase.getCurrentId();

        const uploadTaks = firebase.storage
        .ref(`images/${currentUid}/${image.name}`)
        .put(image);

        /*await uploadTaks.on('state_change',
        (snapshot) =>{
            //progress
        },
        (error) =>{
            //Error
            console.log('Erro Imagem: ' + error);
        },
        ()=>{
            //sucesso
        })*/

    }

    render() {
        return (
            <div>
                <header id="new">
                    <Link to="/dashboard">Voltar</Link>
                </header>

                <form onSubmit={this.cadastrar} id="new-post">
                    <span>{this.state.alert}</span>
                    
                    <label>Upload Imagem:</label><br />
                    <input type="file"
                        onChange={this.handleFile} />
                    <br />
                    
                    <label>Titulo:</label><br />
                    <input type="text"
                        placeholder="nome do post" value={this.state.titulo}
                        onChange={(e) => this.setState({ titulo: e.target.value })} />
                    <br />

                    <label>Descrição:</label><br />
                    <textarea type="text"
                        placeholder="Descrição do post..." value={this.state.descricao}
                        onChange={(e) => this.setState({ descricao: e.target.value })} />
                    <br />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(New);