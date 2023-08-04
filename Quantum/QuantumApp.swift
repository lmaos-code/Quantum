//
//  QuantumApp.swift
//  Quantum
//
//  Created by Manuel Otto Santovenia on 04.08.23.
//

import SwiftUI

@main
struct QuantumApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
