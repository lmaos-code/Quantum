//
//  Request.swift
//  Quantum
//
//  Created by Manuel Otto Santovenia on 20.08.23.
//

import Foundation


public struct Request<Response> {
    var method: HTTPMethod
    var url: URL?
    var queryParams: [String:String]?
    var body: Encodable?
}


public struct HTTPMethod: ExpressibleByStringLiteral {
    public let rawValue: String
    
    public init(rawValue: String) {
        self.rawValue = rawValue
    }

    public init(stringLiteral value: String) {
        self.rawValue = value
    }
    
    public static let get: HTTPMethod = "GET"
    public static let post: HTTPMethod = "POST"
    public static let patch: HTTPMethod = "PATCH"
    public static let put: HTTPMethod = "PUT"
    public static let delete: HTTPMethod = "DELETE"
    public static let options: HTTPMethod = "OPTIONS"
    public static let head: HTTPMethod = "HEAD"
    public static let trace: HTTPMethod = "TRACE"
}
