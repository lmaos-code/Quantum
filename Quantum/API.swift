//
//  RestClient.swift
//  Quantum
//
//  Created by Manuel Otto Santovenia on 20.08.23.
//

import Foundation
import Get

enum API {}

extension API{
    static func news(_ name:String, apiKey: String) -> NewsResource {
        NewsResource(path: "function=NEWS_SENTIMENT&apiKey=\(apiKey)")
    }
    
    struct NewsResource {
        let path: String
        
        // TODO: Implement News Model
        var get: Request<News> {.init(path:path)}
        
    }
    
}

