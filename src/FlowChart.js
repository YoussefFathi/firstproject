import {React} from 'react'
import {dia,shapes} from 'jointjs'
class Trial extends React.Componenet{
    constructor(props){
        super(props);
        this.graph = new joint.dia.Graph();
    }

    componentDidMount(){
        this.paper = new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.refs.placeholder),
            model: graph,
            width: 600,
            height: 100,
            gridSize: 1
        });
        const rect = new joint.shapes.standard.Rectangle();
        rect.position(100, 30);
        rect.resize(100, 40);
        rect.attr({
            body: {
                fill: 'blue'
            },
            label: {
                text: 'Hello',
                fill: 'white'
            }
        });
        rect.addTo(graph);

        var rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(graph);

        var link = new joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);

    }
    render(){
        return <div ref="placeholder" ></div>;
    }
}