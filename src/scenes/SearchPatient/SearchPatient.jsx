import React from 'react';
import QrReader from 'react-qr-reader';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import Toast from '../../components/generics/Toast/Toast';
import Button from '../../components/generics/Button/Button';
import Input from '../../components/generics/Input/Input';
import SelectInput from '../../components/generics/SelectInput/SelectInput';
import './SearchPatient.scss';

const styles = {
  appBar: {
    position: 'relative',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: '#036064',
  },
  form: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

class SearchPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      id: null,
      errorMessage: '',
      openErrorSnackbar: false,
      openSearchDialog: false,
      name: '',
      ward: '',
      bed: '',
    };
    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleCloseToast = this.handleCloseToast.bind(this);
    this.handleClickOpenSearchDialog = this.handleClickOpenSearchDialog.bind(
      this
    );
    this.handleCloseSearchDialog = this.handleCloseSearchDialog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleScan(data) {
    if (data) {
      let id = parseInt(data, 10);

      if (id) {
        this.setState({
          id,
        });
      }
    }
  }

  handleError() {
    this.setState({
      errorMessage: 'Erro no leitor de códigos.',
      openErrorSnackbar: true,
    });
  }

  handleCloseToast(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ openErrorSnackbar: false });
  }

  handleClickOpenSearchDialog() {
    this.setState({ openSearchDialog: true });
  }

  handleCloseSearchDialog() {
    this.setState({
      openSearchDialog: false,
    });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (value === 'null') {
      value = '';
    }
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name.trim() || this.state.bed.trim()) {
      console.log('nome: ', this.state.name);
      console.log('ala: ', this.state.ward);
      console.log('leito: ', this.state.bed);
    } else {
      this.setState({
        errorMessage: 'Indique o nome ou o leito.',
        openErrorSnackbar: true,
      });
    }
  }

  transition(props) {
    return <Slide direction='up' {...props} />;
  }

  openErrorSnackbar() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.openErrorSnackbar}
        autoHideDuration={6000}
        onClose={this.handleCloseToast}>
        <Toast
          onClose={this.handleCloseToast}
          variant='error'
          message={this.state.errorMessage}
        />
      </Snackbar>
    );
  }

  openSearchDialog(classes) {
    return (
      <Dialog
        fullScreen
        open={this.state.openSearchDialog}
        onClose={this.handleCloseSearchDialog}
        TransitionComponent={this.transition}>
        <AppBar className={classes.appBar} color='inherit'>
          <Toolbar className={classes.toolBar}>
            <h4 className={classes.title}>Pesquisar paciente</h4>
            <IconButton
              color='inherit'
              onClick={this.handleCloseSearchDialog}
              aria-label='Fechar'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <form className={classes.form} method='post'>
          <Input
            name='name'
            type='text'
            required={true}
            value={this.state.name}
            onChange={this.handleChange}
            text='Nome'
          />
          <SelectInput
            name='ward'
            text='Ala hospitalar'
            required={true}
            multiple={false}
            onChange={this.handleChange}
            defaultValueText='Todas'
            options={[
              {
                id: 1,
                name: 'UTI',
              },
              {
                id: 2,
                name: 'Oncologia',
              },
              {
                id: 3,
                name: 'Pediatria',
              },
            ]}
          />
          <Input
            name='bed'
            type='text'
            required={true}
            value={this.state.bed}
            onChange={this.handleChange}
            text='Leito'
          />
          <Button
            primary={true}
            type='submit'
            size='big'
            text='Pesquisar'
            onClick={this.handleSubmit}
          />
        </form>
      </Dialog>
    );
  }

  render() {
    const { classes } = this.props;

    if (this.state.id) {
      return <Redirect to={`/paciente/${this.state.id}`} />;
    }

    return (
      <div className='search-patient'>
        <h3 className='title'>Pesquisar paciente</h3>
        <div className='qr-reader'>
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{
              width: '100%',
            }}
          />
        </div>
        <div className='search-patient__name-or-ward'>
          <Button
            primary={true}
            type='button'
            size='huge'
            text='Buscar por nome ou leito'
            onClick={this.handleClickOpenSearchDialog}
          />
        </div>
        <div className='alert-toast'>{this.openErrorSnackbar()}</div>
        <div className='dialog-search'>{this.openSearchDialog(classes)}</div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchPatient);
