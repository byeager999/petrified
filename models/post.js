module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        lostFoundIndicator: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        petName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },        
        petType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 240]
            }
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 240]
            }
        },
        contactName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        contactNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        contactEmail: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        petPic: {
            type: DataTypes.BLOB,
            allowNull: true
        },

        
    })

    return Post;
}