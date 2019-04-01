
import React from 'react'
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    Button,
    StyleSheet,
    Alert
} from 'react-native'
import { connect } from 'react-redux'
import { onItem, onItemDeleted } from './Redux/actions';




class Screen extends React.Component {

    state = {

        currentText: ""
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.listContainter}
                onPress={() => { this._onPressItem(item) }}
            >
                <Text
                    style={styles.listText}
                > {item}
                </Text>

            </TouchableOpacity>

        )
    }
    _onPress = () => {
        if (this.state.currentText != 0) {
            this.props.onItemAdded(this.state.currentText)
            this.setState({
                currentText: ''
            })
        }

    }
    _onPressItem = (item) => {
        Alert.alert(
            'Delete '+ item +' ?',
            'Deleting this would remove it from list',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',style:'destructive', onPress: () => {
                        this.props.onItemDeleted(item)
                    }
                }

            ],
            { cancelable: true },
        )

        this.props.onItemAdded(this.state.currentText)
        this.setState({
            currentText: ''
        })
    }


    render() {
        return (
            <View style={{flex:1}} >
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <TextInput style={{ 
                    borderColor: 'black',
                    fontSize: 20, 
                    margin: 5, 
                    paddingLeft: 10,
                    width:'90%',
                    borderBottomWidth:3,
                    borderBottomColor:'#69e4af'
                    }}
                    onChangeText={(text) =>
                        this.setState({
                            currentText: text
                        })
                    }

                    value={this.state.currentText}
                    placeholder="Enter Text"
                />
                <TouchableOpacity
                    onPress={() =>
                        this._onPress()
                    }
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                        width:'80%',
                        height:45,
                        marginTop:12,
                        backgroundColor:'#69e4af',
                        borderRadius:10
                    }}
                >
                    <Text style={{
                        fontSize:20,
                        color:'white',
                        fontWeight:'bold',
                        }}>Add</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex:3}}> 
                <Text style={{marginTop:10,marginLeft:20,fontSize:30,fontWeight:'bold'}}>List</Text>
                <FlatList
                    style={{flexGrow:0}}
                    data={this.props.list}
                    renderItem={this.renderItem}
                />
                </View> 
            </View>
        )
    }

}
const mapStateToProps = state => {
    return {
        list: state.items.list
    }
}
const dispatchToProps = (dispatch) => {
    return {
        onItemAdded: (string) => dispatch(onItem(string)),
        onItemDeleted: (string) => dispatch(onItemDeleted(string))
    }
}


export default connect(mapStateToProps, dispatchToProps)(Screen);

const styles = StyleSheet.create({
    listContainter: {
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomColor: '#c2c2c2',
        borderBottomWidth: .4,


    },
    listText: {
        fontSize: 18,
        color: '#333232',
        height: 22,

    }
})

