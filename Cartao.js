import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export default class Cartao extends Component {
    render() {
        let url = this.props.url
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ padding: 10 }}>
                    <Image source={{ uri: url }} style={{ width: 100, height: 100 }} ></Image>
                </View>
                <View style={{top:30}}>
                    <Text style={{ color: '#89CFF0' }}>
                        {this.props.nome}
                    </Text>
                    <Text style={{ color: '#89CFF0' }}>
                        {this.props.disciplina}
                    </Text>
                </View>
            </View>
        )
    }
}

