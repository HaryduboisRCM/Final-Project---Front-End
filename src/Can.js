
class Can extends PureComponent {
    //...
    
    componentWillMount() {
        this.unsubscribeFromAbility = ability.on('update', () => {
          setTimeout(() => this.recheck(), 0)
        });
        this.recheck();
      }
  
      componentWillUnmount() {
        this.unsubscribeFromAbility();
      }
    
      //...
    }