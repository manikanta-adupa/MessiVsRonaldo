import { useState } from "react";
import { Container,  Row, Col, Card, Button } from "react-bootstrap";
export default function VotingPage() {
    // Add this player data
    const players = [
        {
            id: 'messi',
            name: 'Lionel Messi',
            image: 'https://via.placeholder.com/200x200/0066ff/ffffff?text=Messi',
            stats: { goals: 838, assists: 400, ballonDor: 8, trophies: 44 }
        },
        {
            id: 'ronaldo', 
            name: 'Cristiano Ronaldo',
            image: 'https://via.placeholder.com/200x200/ff6600/ffffff?text=Ronaldo',
            stats: { goals: 850, assists: 250, ballonDor: 5, trophies: 35 }
        }
    ];

    const [votes, setVotes] = useState({
        messi: 0,
        ronaldo: 0
    });

    const handleVote = (playerId) => {
        setVotes({
            ...votes,
            [playerId]: votes[playerId] + 1
        });
    };
    
    return (
        <Container>
            <h1 className="text-center my-5 display-4 fw-bold">Choose Your GOAT ⚽</h1>
            
            {/* Add vote summary */}
            <Row className="justify-content-center mb-5">
                <Col md={8}>
                    <Card className="bg-light border-0 shadow-sm">
                        <Card.Body className="text-center">
                            <h4 className="mb-3">Live Vote Count</h4>
                            <Row>
                                <Col>
                                    <h2 className="text-primary">Messi: {votes.messi}</h2>
                                </Col>
                                <Col>
                                    <h2 className="text-danger">Ronaldo: {votes.ronaldo}</h2>
                                </Col>
                            </Row>
                            <small className="text-muted">
                                Total votes: {votes.messi + votes.ronaldo}
                            </small>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            <Row className="justify-content-center">
                {players.map(player => (
                    <Col lg={5} md={6} key={player.id} className="mb-4">
                        <Card className="h-100 shadow-lg border-0 hover-card">
                            <Card.Img 
                                variant="top" 
                                src={player.image} 
                                style={{height: '250px', objectFit: 'cover'}} 
                            />
                            <Card.Body className="text-center p-4">
                                <Card.Title className="display-6 fw-bold text-primary mb-3">
                                    {player.name}
                                </Card.Title>
                                
                                {/* Stats Grid */}
                                <Row className="mb-4">
                                    <Col xs={6}>
                                        <div className="stat-item">
                                            <h4 className="text-success fw-bold">{player.stats.goals}</h4>
                                            <small className="text-muted">Goals</small>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="stat-item">
                                            <h4 className="text-info fw-bold">{player.stats.assists}</h4>
                                            <small className="text-muted">Assists</small>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="stat-item">
                                            <h4 className="text-warning fw-bold">{player.stats.ballonDor}</h4>
                                            <small className="text-muted">Ballon d'Or</small>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="stat-item">
                                            <h4 className="text-danger fw-bold">{player.stats.trophies}</h4>
                                            <small className="text-muted">Trophies</small>
                                        </div>
                                    </Col>
                                </Row>
                                
                                {/* Vote Button */}
                                <Button className="btn btn-primary btn-lg w-100 fw-bold" onClick={() => handleVote(player.id)} >
                                    Vote for {player.name} 🏆 
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}