//
//  News.swift
//  Quantum
//
//  Created by Manuel Otto Santovenia on 20.08.23.
//

import Foundation

public struct News: Decodable {
    // Title of the News Article
    let title: String
    
    let topics: [topic]
    
    let publish_time: Int64
    
    let authors: [String]
    
    let url: String
    
    let bannerImage: String
    
    let summary: String
    
    let sentiment: String
    
}
struct topic: Decodable {
    let topic: String
    let relevance_score: String
}
