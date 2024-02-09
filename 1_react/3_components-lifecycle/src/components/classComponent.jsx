import { Component } from 'react';

export default class Counter extends Component {
  // kurucu method > gönderilen propları alırız
  constructor(props) {
    super(props);

    // class component'ta state tanımlama
    this.state = {
      count: 0,
      theme: 'dark',
    };
  }

  // sayıyı bir arttıran fonksiyon
  handleClick = () => {
    // class component'larda state değiştme yöntemi:
    this.setState({ ...this.state, count: this.state.count + 1 });
  };

  // bileşen ekrana basıldığında fonksiyon çalıştır
  componentDidMount() {
    console.log('Bileşen ekrana basıldı');
  }

  // bileşnin ekrandan gitme olayını izler
  componentWillUnmount() {
    console.log('Bileşn ekranadan gitti');
  }

  // bileşenin güncellenme olayını izleme
  componentDidUpdate() {
    console.log(
      'Api dan ' + this.state.count + ' sayfasının veierleri alındı'
    );
  }

  // ekrana basılcak arayüzü belirleme
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              count: this.state.count - 1,
            });
          }}
        >
          Azalt
        </button>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick}>Arttır</button>
      </div>
    );
  }
}
