import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './Patient.scss';

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
  graphContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  graph: {
    width: '100%',
  },
};

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      openErrorSnackbar: false,
      graph: null,
      openGraph: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    console.log('ID: ', this.props.match.params.id);
  }

  handleClick(event, index) {
    event.preventDefault();
    this.setState({
      openGraph: true,
      graph: index,
    });
  }

  transition(props) {
    return <Slide direction='up' {...props} />;
  }

  handleClose() {
    this.setState({
      openGraph: false,
    });
  }

  openGraph(classes) {
    return (
      <Dialog
        fullScreen
        open={this.state.openGraph}
        onClose={this.handleClose}
        TransitionComponent={this.transition}>
        <AppBar className={classes.appBar} color='inherit'>
          <Toolbar className={classes.toolBar}>
            <h4 className={classes.title}>Nome do gráfico</h4>
            <IconButton
              color='inherit'
              onClick={this.handleClose}
              aria-label='Fechar'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.graphContent}>
          <img
            className={classes.graph}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/ScientificGraphSpeedVsTime.svg/300px-ScientificGraphSpeedVsTime.svg.png'
            alt='grafico'
          />
        </div>
      </Dialog>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className='patient'>
        <div className='patient__informations'>
          <h5 className='name'>Maria Silveira</h5>
          <div className='info'>
            <span className='info__description'>Idade:</span>
            <span className='info__content'>30 anos</span>
          </div>
          <div className='info'>
            <span className='info__description'>Ala:</span>
            <span className='info__content'>UTI</span>
          </div>
          <div className='info'>
            <span className='info__description'>Leito:</span>
            <span className='info__content'>100</span>
          </div>
        </div>
        <div className='patient__graphs'>
          <div className='graph' onClick={event => this.handleClick(event, 0)}>
            <div className='graph__name'>Nome do gráfico</div>
          </div>
          <div className='graph'>
            <div className='graph__name'>Nome do gráfico</div>
          </div>
          <div className='graph'>
            <div className='graph__name'>Nome do gráfico</div>
          </div>
          <div className='graph'>
            <div className='graph__name'>Nome do gráfico</div>
          </div>
        </div>
        {this.openGraph(classes)}
      </div>
    );
  }
}

export default withStyles(styles)(Patient);
